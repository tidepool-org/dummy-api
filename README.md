dummy-api
=========

This exists to show the best practices for Tidepool code. Eventually it will be an example of how we design APIs, write code, do documentation, do testing, and deploy reliably.

Literate documentation of the sample code is [here](docs/lib/index.html).

OK. That didn't work because I didn't think that github would serve the source of the HTML instead of as a page. We need to build deployment before I can build a link that works.

## Running it locally

To use this stuff, you need to install node, npm, and grunt. (details to come).

Once you have those, you can install all dependencies with:

    npm install

For ease of test/debug, you can run this under nodemon, which is why there's a Procfile. You simply have to run nodemon from the top level folder and it will Do The Right Thing. The default port is 
port 80, so chances are that to run locally you'll want to set the DUMMY_PORT environment variable
to a port you'd like to use for testing. For example, ```export DUMMY_PORT=7887```

## Testing

TBD

## Deployment

TBD

## Documentation

We use docco.

