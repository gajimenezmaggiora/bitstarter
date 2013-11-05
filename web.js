var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.logger());

// Define root path
app.get('/', function(request, response) {
  response.sendfile('./index.html');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
