module.exports = (function(){
  var env = {};

  // The port for the server to listen on.
  env.port = process.env.PORT || process.argv[3] || 3001;

  //Debuging set
  env.debug = process.env.DEBUG || false;

  return env;
})();
