var cipher = require('sjcl');
var db = require('../dbconfig.js');


var getPasswords = function ( res ) {
  db.passwords.findAll({
    attributes: ['siteName', 'password']
  }).then(function ( passwords ) {
    console.log(passwords);
  });
};

var savePassword = function ( site, password, res ) {
  var encryptPass = JSON.stringify(cipher.encrypt(site, password));
  db.passwords.create({
    siteName: site,
    password: encryptPass
  }).then(function(){
    res.sendStatus(201);
  })
}

exports.getPasswords = getPasswords;
exports.savePassword = savePassword;