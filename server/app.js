module.exports = function () {
  'use strict';
  var express = require('express'),
    app = express(),
    DIST_DIR = __dirname + '/../dist',
    PORT = 9000;

  app.use(express.static(DIST_DIR));

  app.get('/', function (req, res) {
    res.sendfile(DIST_DIR + '/index.html');
  });

  app.get('*.js', function (req, res) {
    res.sendfile(DIST_DIR + '/' + req.url);
  });

  app.get('*.css', function (req, res) {
    res.sendfile(DIST_DIR + '/' + req.url);
  });

  app.listen(PORT);

  console.log('webserver running on:\nhttp://localhost:' + PORT);
};
