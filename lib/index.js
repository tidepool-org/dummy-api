/*
== STANDARD HEADER ==

This file is to serve (eventually) as a demonstration of Tidepool best practices for API design
and implementation. 
*/


(function() {
  'use strict';
  var echo, envConfig, port, restify, server;

  envConfig = process.env;
  restify = require('restify');
  server = restify.createServer({
    name: 'TidepoolDummy'
  });

  server.use(restify.queryParser());
  server.use(restify.bodyParser());

  echo = function(req, res, next) {
    console.log('request', req.params, req.url, req.method);
    res.send([
      'Echo!', {
        params: req.params,
        headers: req.headers,
        method: req.method
      }
    ]);
    return next();
  };

  server.get('/api/v1/echo', echo);
  server.post('/api/v1/echo', echo);
  server.put('/api/v1/echo', echo);
  server.del('/api/v1/echo', echo);
  server.head('/api/v1/echo', echo);

  port = envConfig.DUMMY_PORT || 80;
  console.log('serving on port', port);
  server.listen(port);

}).call(this);
