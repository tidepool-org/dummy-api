


all: build install

install:
	npm install

test:
	jshint lib/*.js

build:
	grunt

docs/: lib/
	grunt

travis:
	# set up for travis

configure:
	

