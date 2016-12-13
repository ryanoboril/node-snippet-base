'use strict';
//
// CloudMine, Inc.
// 2015
//

/**
 * Require your Snippets
 * This can be more expressive, for example, you can use `fs` to
 * read all snippets in a directory and set them to your `module.exports`.
 */

var BasicSnippet = require('./lib/basic_snippet');
var CloudMineNode = require('cloudmine-servercode');
// Require any other node module you want...

var AlographBackend = require('./lib/backend_snippet')(CloudMineNode.server);

/**
 * The `module.exports` **must** be called before the server is started,
 * or the server won't be able to read in the exports.
 */
module.exports = {
  backend: AlographBackend,
  basic: BasicSnippet,
};

/**
 * Start the CloudMine server.
 */
CloudMineNode.start(module, './index.js', function(err) {
  console.log('Server Started?', err);
});
