var express = require('express');
var router = require('router.js');

var app = express();

app.use(router.requestHandler);

app.listen(3000);

console.log("Listening on port 3000");

module.exports = app;