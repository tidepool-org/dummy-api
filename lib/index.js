// index.js
// --------
// This file is designed to serve as a demonstration of Tidepool best practices for API design
// and implementation. 
// 
// It would be a good idea to read 
// [the central wiki on Tidepool's github account](https://github.com/tidepool-org/central/wiki).

/*
 * == TIDEPOOL LICENSE ==
 * Copyright (C) 2013 Tidepool Project
 * 
 * This source code is subject to the terms of the Tidepool Open Data License, v. 1.0.
 * If a copy of the license was not provided with this file, you can obtain one at:
 *     http://tidepool.org/license/
 * 
 * == TIDEPOOL LICENSE ==
 */


// We currently use the coffeescript-inspired anonymous namespacing model, where we create a function
// and then call it with this. It keeps the namespace from being accidentally overridden
// although it doesn't give us actual namespaces.  
(function() {
  // We use strict because we're only worried about modern browsers and we should be strict.
  // JSHint actually insists on this and it's a good idea.
  'use strict';

  // It's also a good idea to predeclare all variables at the top of a scope. Javascript doesn't
  // support block scoping so putting them all at the beginning is a smart move.
  var echo, envConfig, port, restify, server, i18n;

  // Server code needs the environment.
  envConfig = process.env;

  // Restify helps us with building a RESTful API.
  restify = require('restify');
  server = restify.createServer({
    // I don't know what this name actually does. 
    name: 'TidepoolDummy'
  });

  // Two standard restify handler plugins:
  server.use(restify.queryParser());
  server.use(restify.bodyParser());

  // Localization setup
  i18n = require('i18n');
  
  i18n.configure({
    locales:['en-GB', 'en-US', 'es-AR'],
    defaultLocale: 'en-GB',
    directory: './locales'
  });

  server.use(i18n.init);

  // This function merely echoes everything it got as a block of text. Useful for debugging.
  echo = function(req, res, next) {
    console.log('request', req.params, req.url, req.method);
    //use i18n translation
    res.send([
      i18n.__('Echo!'), { 
        params: req.params,
        headers: req.headers,
        method: req.method
      }
    ]);
    return next();
  };

  // We need to have sensible responses for all the standard verbs.
  // Versioning of the API still needs some work -- restify supports a standard model out of the box.
  // Maybe we should use it.
  server.get('/api/v1/echo', echo);
  server.post('/api/v1/echo', echo);
  server.put('/api/v1/echo', echo);
  server.del('/api/v1/echo', echo);
  server.head('/api/v1/echo', echo);

  // If the port is specified in the environment we'll use it, but for deploys we 
  // want to run on port 80 and then map it in the router.
  port = envConfig.DUMMY_PORT || 3000;
  console.log('echo API server serving on port', port);
  server.listen(port);

// Wrap up the javascript namespacing model.
}).call(this);
