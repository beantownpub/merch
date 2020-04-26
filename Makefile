.PHONY: all test clean

sass:
		sass ${PWD}/src/sass/jal.sass ${PWD}/dist/public/css/style.css

stop:
		docker rm -f jal || true

build: sass
		docker build -t node_jal .

start:
		docker run \
			-d \
			--name jal \
			--restart always \
			-p "3000:3000" \
			-v "${PWD}/dist/public/css:/app/dist/public/css" \
			-v "${PWD}/dist/public/images:/app/dist/public/images" \
			-e JAL_VERSION='0.0.01' \
			node_jal