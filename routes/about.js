var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Sampsa Kares');
});

module.exports = router;

// var http = require('http');

// var server = http.createServer(function(request, response) {

//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.end("Hello World! My name is Sampsa, and this is my first Node.js server\nWe are live!");

// });

// var port = process.env.PORT || 3000;
// server.listen(port);

// console.log("Server running at http://localhost:%d", port);