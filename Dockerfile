FROM node:10.20.1-buster-slim AS build

RUN apt-get update  && \
    apt-get install -y \
        python \
        g++ \
        make \
        gcc

FROM build AS install
COPY ./package.json /app/
WORKDIR /app
RUN npm install --clean-install --save-dev
COPY . ./
RUN npx webpack --config webpack.config.js && \
    rm -rf node_modules

FROM node:13.13.0-buster-slim

ENV TINI_VERSION v0.18.0

COPY ./package.json /app/
WORKDIR /app
RUN npm install --clean-install --production || npm install --clean-install --production
COPY . ./
COPY --from=install /app/dist/public/js/main.js /app/dist/public/js/
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
ENTRYPOINT ["/tini", "-s", "--"]

USER node
CMD ["npm", "run", "start"]
