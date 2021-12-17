.PHONY: all test clean

dockerhub ?= jalgraves
image_name ?= beantown
version ?= $(shell jq -r .version package.json)
runtime = RUNTIME


sass:
		sass ${PWD}/src/sass/style.sass ${PWD}/dist/public/css/style.css

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

publish: dev_build
		docker tag $(image_name):$(version) $(dockerhub)/$(image_name):$(version)
		docker push $(dockerhub)/$(image_name):$(version)

latest:
		docker tag $(image_name):$(version) $(dockerhub)/$(image_name):latest
		docker push $(dockerhub)/$(image_name):latest
