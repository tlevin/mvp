var user = require("./controllers/user.js");
var pass = require("./controllers/passwords.js");

exports.postPasswords = function ( req, res ) { 
  pass.savePassword( req.body.siteName, req.body.password, res );
};

exports.getPasswords = function ( req, res ) {
  user.verifyUser ( req.body.username, req.body.password, res )
};

exports.verifyUser = function ( req, res ) {
  user.verifyUser ( req.body.username, req.body.password, res );
};

exports.postUser = function ( req, res ) {
  user.createUser( req.body.username, req.body.password, res );
  
};