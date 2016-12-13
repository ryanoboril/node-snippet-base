'use strict';

var Hapi = require('hapi');
var app = new Hapi.Server();
var models = require('./models');

// TODO make this a config thing, use environment based setting
var serverPort = 8080;
app.connection({port: serverPort})

//Routing
var routes = require('./controllers');
console.log(JSON.stringify(routes));
app.route(routes);

app.start(function (err) {
  console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
});
