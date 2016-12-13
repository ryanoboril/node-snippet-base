'use strict';

var routes = require('./backend/controllers');

module.exports = function(app) {
  console.log(routes);
  app.route(routes);

  return function(req, reply) {
    reply({success:"Backend snippet was called!"});
  };
};
