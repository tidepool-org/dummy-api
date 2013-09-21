

all: build install

install:
	npm install

test:
	grunt jshint

build:
	grunt

docs/: lib/
	grunt

travis:
	# set up for travis
	npm install -g grunt

configure:
	

