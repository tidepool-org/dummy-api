


all: build install

install:
	npm install

test:
	./node_modules/.bin/grunt jshint

build:
	./node_modules/.bin/grunt

docs/: lib/
	./node_modules/.bin/grunt

travis:
	# set up for travis
	npm install grunt

configure:
	

