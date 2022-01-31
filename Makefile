.PHONY: all test clean

dockerhub ?= jalgraves
image_name ?= beantown
version ?= $(shell jq -r .version package.json | tr -d '"')
hash = $(shell git rev-parse --short HEAD)

ifeq ($(env),dev)
	image_tag = $(version)-$(hash)
	node_env = development
	square_app_id = ${SQUARE_APP_ID_DEV}
else ifeq ($(env), prod)
	image_tag = $(version)
	node_env = production
	square_app_id = ${SQUARE_APP_ID_PROD}
endif


sass:
	sass ${PWD}/src/sass/style.sass ${PWD}/dist/public/css/style.css

build: sass
	docker build \
		-t $(image_name):$(image_tag) \
		--build-arg google_api_key=${GOOGLE_API_KEY} \
		--build-arg square_app_id=${SQUARE_APP_ID} \
		--build-arg square_location_id=${SQUARE_LOCATION_ID} \
		--build-arg node_env=$(node_env) .

publish: build
	docker tag $(image_name):$(image_tag) $(dockerhub)/$(image_name):$(image_tag)
	docker push $(dockerhub)/$(image_name):$(image_tag)

latest:
	docker tag $(image_name):$(version) $(dockerhub)/$(image_name):latest
	docker push $(dockerhub)/$(image_name):latest
