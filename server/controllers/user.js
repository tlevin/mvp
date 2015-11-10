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

var verifyUser = function ( user, password, res ) {
  db.users.findOne({
    where: {
      username : user
    }
  }).then(function(user) {
    bcrypt.compare(password, user.get('password'), function ( err, found ) {
      if ( found ) {
        res.sendStatus(200);
      } else {
        res.sendStatus(302);
      }
    });

  });
};


exports.createUser = createUser;
exports.verifyUser = verifyUser;