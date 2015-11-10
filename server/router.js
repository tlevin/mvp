var app = require('app.js');
var requestHandler = require('requestHandler.js')

app.post('/passwords', requestHandler.postPasswords);
app.get('/passwords', requestHandler.getPasswords);

app.get('/user', requestHandler.getUser);
app.post('/user', requestHandler.postUser);

