var user = require("./controllers/user.js");

exports.postPasswords = function ( req, res ) { 

};

exports.getPasswords = function ( req, res ) {
  
};

exports.verifyUser = function ( req, res ) {
  console.log(req.body);
  user.verifyUser ( req.body.username, req.body.password, res );
};

exports.postUser = function ( req, res ) {
  user.createUser( req.body.username, req.body.password, res );
  
};