.PHONY: all test clean

name ?= beantown
image ?= beantown
env ?= dev
tag ?= $(shell grep 'appVersion:' Chart.yaml | cut -f 2 -d' ')
port ?= ${BEANTOWN_PORT}

ifeq ($(env),dev)
	context = ${DEV_CONTEXT}
	namespace = ${DEV_NAMESPACE}
	square_url = ${SQUARE_URL_DEV}
	logLevel = dev
else ifeq ($(env), prod)
	context = ${PROD_CONTEXT}
	namespace = ${PROD_NAMESPACE}
	square_url = ${SQUARE_URL_PROD}
	logLevel = tiny
endif

## Publish beantown Helm chart
helm/publish:
	cd helm/beantown/ && helm package . && \
		cd - && \
		helm repo index . --url https://beantownpub.github.io/helm/ && \
		git add admin/

## Create app-creds
helm/creds/app: context
	@echo "\033[1;32m. . . Installing creds $(env) secret . . .\033[1;37m\n"
	kubectl create secret generic app-creds \
		--namespace $(namespace) \
		--from-literal=api_user="${API_USER}" \
		--from-literal=api_pass="${API_PASS}" \
		--from-literal=db_host="${DB_HOST}" \
		--from-literal=db_pass="${DB_PASS}" \
		--from-literal=db_port="${DB_PORT}" \
		--from-literal=db_user="${DB_USER}"

## Create common apps secret
helm/creds/services: context
	@echo "\033[1;32m. . . Installing external services secret . . .\033[1;37m\n"
	kubectl create secret generic services \
		--namespace $(namespace) \
		--from-literal=contact_api_host="${CONTACT_API_HOST}" \
		--from-literal=contact_api_port="${CONTACT_API_PORT}" \
		--from-literal=contact_api_protocol="${CONTACT_API_PROTOCOL}" \
		--from-literal=menu_api_host="${MENU_API_HOST}" \
		--from-literal=menu_api_port="${MENU_API_PORT}" \
		--from-literal=menu_api_protocol="${MENU_API_PROTOCOL}" \
		--from-literal=merch_api_host="${MERCH_API_HOST}" \
		--from-literal=merch_api_port="${MERCH_API_PORT}" \
		--from-literal=merch_api_protocol="${MERCH_API_PROTOCOL}" \
		--from-literal=users_api_host="${USERS_API_HOST}" \
		--from-literal=users_api_port="${USERS_API_PORT}" \
		--from-literal=users_api_protocol="${USERS_API_PROTOCOL}"

## Install beantown frontend in K8s cluster
helm/install:
	kubectl config use-context $(context) && \
	helm upgrade --install beantown helm/beantown/ \
		--namespace $(namespace) \
		--set image.tag=$(tag) \
		--set aws.accessKeyId=${AWS_ACCESS_KEY_ID} \
		--set aws.secretAccessKey=${AWS_SECRET_ACCESS_KEY} \
		--set aws.secretName=${AWS_SECRET_NAME} \
		--set aws.appSecretName=${AWS_APP_SECRET_NAME} \
		--set aws.region=${AWS_REGION} \
		--set global.env=$(env) \
		--set kafka_bootstrap_server=${KAFKA_BOOTSTRAP_SERVER} \
		--set kafka_password=${KAFKA_PASSWORD} \
		--set kafka_username=${KAFKA_USERNAME} \
		--set menuApi.host=${MENU_API_HOST} \
		--set menuApi.protocol=${MENU_API_PROTOCOL} \
		--set session_secret=${SESSION_SECRET} \
		--set square_access_token_dev=${SQUARE_ACCESS_TOKEN_DEV} \
		--set square_access_token_prod=${SQUARE_ACCESS_TOKEN_PROD} \
		--set square_application_id_sandbox=${SQUARE_APPLICATION_ID_SANDBOX} \
		--set square_url=$(square_url) \
		--set logLevel=$(logLevel) \
		--debug

## Uninstall beantown frontend from K8s cluster
helm/delete:
	kubectl config use-context $(context) && \
	helm uninstall $(name) -n $(namespace)

## Delete Helm release and redeploy
helm/redeploy: helm/stop_pf helm/delete helm/install

## Create chart schema
helm/schema_create:
	cd helm/beantown && helm schema-gen values.yaml > values.schema.json

## Run helm template
template:
	helm template helm/beantown/ \
		--namespace $(namespace) \
		--name-template=$(name) \
		--set global.env=$(env) \
		--debug

.ONESHELL: port_forward

## Start port forwarding
helm/port_forward:
	kubectl port-forward --namespace $(namespace) svc/$(name) $(port):$(port)

## Stop port forwarding
helm/stop_pf:
	./scripts/stop_port_forward.sh $(port)

logs:
	~/github/beantown/helm/scripts/get_pod_logs.sh $(namespace) $(name)
