.PHONY: all test clean

dockerhub ?= jalgraves
image_name ?= beantown
name ?= beantown
port ?= 3000
version ?= $(shell jq -r .version package.json | tr -d '"')
hash = $(shell git rev-parse --short HEAD)

ifeq ($(env),dev)
	image_tag = $(version)-$(hash)
	node_env = development
	square_app_id = ${SQUARE_APP_ID_DEV}
	square_location_id = ${SQUARE_LOCATION_ID_DEV}
	context = ${DEV_CONTEXT}
	namespace = ${DEV_NAMESPACE}
else ifeq ($(env), prod)
	image_tag = $(version)
	node_env = production
	square_app_id = ${SQUARE_APP_ID_PROD}
	square_location_id = ${SQUARE_LOCATION_ID_PROD}
	context = ${PROD_CONTEXT}
	namespace = ${PROD_NAMESPACE}
endif


context:
	kubectl config use-context $(context)

sass:
	sass ${PWD}/src/static/sass/style.sass ${PWD}/dist/public/css/style.css

build: sass
	docker build \
		-t $(image_name):$(image_tag) \
		--build-arg google_api_key=${GOOGLE_API_KEY} \
		--build-arg square_app_id=$(square_app_id) \
		--build-arg square_location_id=$(square_location_id) \
		--build-arg static_path=${BEANTOWN_STATIC_PATH} \
		--build-arg node_env=$(node_env) .

publish: build
	docker tag $(image_name):$(image_tag) $(dockerhub)/$(image_name):$(image_tag)
	docker push $(dockerhub)/$(image_name):$(image_tag)

latest:
	docker tag $(image_name):$(version) $(dockerhub)/$(image_name):latest
	docker push $(dockerhub)/$(image_name):latest

exec_pod: context
	${HOME}/github/helm/scripts/exec_pod.sh $(env) $(name)

kill_pod: context
	${HOME}/github/helm/scripts/kill_pod.sh $(env) $(name)

kill_port_forward: context
	${HOME}/github/helm/scripts/stop_port_forward.sh $(port)

redeploy: build restart

restart: kill_pod kill_port_forward
