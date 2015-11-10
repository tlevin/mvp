var bcrypt = require('bcrypt');
var db = require('../dbconfig.js');
var Promise = require('bluebird');

var createUser = function ( user, password, res ) {
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) { 
      db.users.create({
        username: user,
        password: hash
      }).then(function (){
        res.sendStatus(201);
      });
    });
  });
};
exports.createUser = createUser;