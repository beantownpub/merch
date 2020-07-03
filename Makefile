.PHONY: all test clean

sass:
		sass ${PWD}/src/sass/jal.sass ${PWD}/dist/public/css/style.css

stop:
		docker rm -f frontend || true

build: sass
		docker build -t merch_frontend .

start:
		docker run \
			-d \
			--name frontend \
			--restart always \
			-p "3000:3000" \
			-v "${PWD}/dist/public/css:/app/dist/public/css" \
			-v "${PWD}/dist/public/images:/app/dist/public/images" \
			-e JAL_VERSION='0.0.01' \
			jalgraves/beantown_frontend:latest

publish: build
		docker tag merch_frontend jalgraves/merch_frontend
		docker push jalgraves/merch_frontend