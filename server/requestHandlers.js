var user = require("./controllers/user.js");

exports.postPasswords = function ( req, res ) { 

};

exports.getPasswords = function ( req, res ) {
  
};

exports.getUser = function ( req, res ) {
  
};

exports.postUser = function ( req, res ) {
  user.createUser( req.body.username, req.body.password, res )
  
};