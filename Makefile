

all: build install

install:
	npm install

test:
	npm test

build:
	grunt

docs/: lib/
	grunt

travis:
	# set up for travis

configure:
	

