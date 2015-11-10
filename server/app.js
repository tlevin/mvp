var express = require('express');
var requestHandler = require('./requestHandlers.js');
var db = require('./dbconfig.js');
var parser = require('body-parser');


var app = express();

app.use(parser.json())

app.post('/passwords', requestHandler.postPasswords);
app.get('/passwords', requestHandler.getPasswords);

app.post('/user/verify', requestHandler.verifyUser);
app.post('/user', requestHandler.postUser);

app.use('*', function( req, res ) {
  res.sendStatus(404);
});

app.listen(3000);

console.log("Listening on port 3000");

module.exports = app;