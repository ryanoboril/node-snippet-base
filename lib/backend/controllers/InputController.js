'use strict';

var InputImage = require('../models/InputImage');
var multiparty = require('multiparty');
var form = new multiparty.Form({autoFields: true, autoFiles: true, uploadDir: './tmp'});
//var fs = require('fs');

router.post('/input', function inputPOST (req, res) {
//fs.writeFile("./tmp/node-base-request.log", JSON.stringify(req), function(err) {
//  if(err) {
//    return console.log(err);
//  }
//
//  console.log("The file was saved!");
//});
console.log(req);
  var r = {};
  form.parse(req, function(err, fields, files) {
console.log(JSON.stringify(fields));
console.log(JSON.stringify(files));
    InputImage.process(files.photo[0].path);
    res.status(200).send(r);
  });
});

module.exports = router;
