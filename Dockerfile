FROM node:14.17.6-buster-slim AS build

RUN apt-get update  && \
    apt-get install -y \
        apt-utils \
        python \
        g++ \
        make \
        gcc

FROM build AS install
ARG google_api_key
ARG square_app_id
ARG square_location_id
ARG node_env
ENV GOOGLE_API_KEY=${google_api_key}
ENV SQUARE_APP_ID=${square_app_id}
ENV SQUARE_LOCATION_ID=${square_location_id}
ENV NODE_ENV=${node_env}

COPY ./package* /app/
WORKDIR /app
RUN npm ci --save-dev --production=false
COPY . ./

RUN npx webpack --config webpack.config.js && \
    rm -rf node_modules

FROM node:14.17.6-buster-slim

ENV TINI_VERSION v0.19.0
RUN apt-get update && apt-get install -y curl
COPY ./package* /app/
WORKDIR /app
RUN npm ci --production || npm ci --production
COPY . ./
COPY --from=install /app/dist/public/js/main.js /app/dist/public/js/
RUN chown -R node:node /app/dist/public/
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
ENTRYPOINT ["/tini", "-s", "--"]

USER node
CMD ["npm", "run", "start"]
