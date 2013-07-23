var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

app.use(express.static(__dirname + '/bootstrap'));
app.use(express.static(__dirname + '/asset'));

app.get('/', function(request, response) {
  var buf = fs.readFileSync('index.html');
  response.send(buf.toString('utf-8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
