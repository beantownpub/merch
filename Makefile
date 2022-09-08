.PHONY: all test clean

dockerhub ?= jalgraves
image_name ?= beantown
name ?= beantown
port ?= 3000
version ?= $(shell jq -r .version package.json | tr -d '"')
hash = $(shell git rev-parse --short HEAD)
git_hash = $(shell git rev-parse --short HEAD)

ifeq ($(env),dev)
	image_tag = $(version)-$(hash)
	node_env = development
	square_app_id = ${SQUARE_APP_ID_DEV}
	square_location_id = ${SQUARE_LOCATION_ID_DEV}
	context = ${DEV_CONTEXT}
	namespace = ${DEV_NAMESPACE}
	support_email = ${TEST_SUPPORT_EMAIL}
else ifeq ($(env), prod)
	image_tag = $(version)
	node_env = production
	square_app_id = ${SQUARE_APP_ID_PROD}
	square_location_id = ${SQUARE_LOCATION_ID_PROD}
	context = ${PROD_CONTEXT}
	namespace = ${PROD_NAMESPACE}
	support_email = ${BEANTOWN_SUPPORT_EMAIL}
endif

lint:
	npx eslint .

context:
	kubectl config use-context $(context)

sass:
	sass ${PWD}/src/static/sass/style.sass ${PWD}/dist/public/css/style.css

build: sass
	@echo "\033[1;32m. . . Building $(image_name):$(image_tag)  . . .\033[1;37m\n"
	@echo "\033[1;32mNode Env: $(node_env)\033[1;37m\n"
	docker build \
		--platform linux/x86_64 \
		-t $(image_name):$(image_tag) \
		--build-arg square_app_id=$(square_app_id) \
		--build-arg square_location_id=$(square_location_id) \
		--build-arg static_path=${BEANTOWN_STATIC_PATH} \
		--build-arg support_email=$(support_email) \
		--build-arg node_env=$(node_env) \
		--build-arg git_hash=$(git_hash) \
		--build-arg version=$(version) .

publish: build
	@echo "\033[1;32m. . . Publishing $(image_name):$(image_tag) . . .\033[1;37m\n"
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

clean:
	rm -rf node_modules/
