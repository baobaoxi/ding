var express = require('express');
var path = require('path');
var app = express();

//静态资源所在的根目录
app.use('/', express.static(path.join(__dirname, '')));
var server = app.listen(3001, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});