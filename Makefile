.PHONY: all test clean

dockerhub ?= jalgraves
image_name ?= beantown_frontend
version ?= $(shell jq .version package.json)
runtime = RUNTIME

merch_host ?= $(shell docker inspect merch_api | jq .[0].NetworkSettings.Networks.bridge.IPAddress || echo "no-container")

sass:
		sass ${PWD}/src/sass/jal.sass ${PWD}/dist/public/css/style.css

host:
		echo $(merch_host)

stop:
		docker rm -f frontend || true

prod_build: sass
		docker build \
			-t $(image_name):$(version) \
			--build-arg square_app_id=${SQUARE_APP_ID} \
			--build-arg node_env=production .

dev_build: sass
		docker build \
			-t $(image_name):$(version) \
			--build-arg square_app_id=${SQUARE_APP_ID} \
			--build-arg node_env=development .

start:
		docker run \
			-d \
			--name frontend \
			--restart always \
			-p "3000:3000" \
			-v "${PWD}/dist/public/css:/app/dist/public/css" \
			-v "${PWD}/dist/public/images:/app/dist/public/images" \
			-e JAL_VERSION="$(runtime)" \
			-e MERCH_API_HOST=$(merch_host) \
			-e SQUARE_LOCATION_ID=${SQUARE_LOCATION_ID} \
			-e SQAURE_ACCESS_TOKEN=${SQAURE_ACCESS_TOKEN} \
			-e API_USER=${API_USER} \
			-e API_PW=${API_PW} \
			$(image_name):$(version)

publish: build
		docker tag $(image_name):$(version) $(dockerhub)/$(image_name):$(version)
		docker push $(dockerhub)/$(image_name):$(version)
