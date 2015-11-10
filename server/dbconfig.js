var Sequelize = require('sequelize');

var sequelize = new Sequelize('main', 'root', '1234');

//establish user table
exports.users = sequelize.define('users', {
  username : {
    type: Sequelize.STRING,
    unique: true
  },
  password : Sequelize.STRING
});

//establish password table
exports.passwords = sequelize.define('passwords', {
  siteName : Sequelize.STRING,
  password : Sequelize.STRING
});
//sync the server to new schema
sequelize.sync();

//establish relationships between tables
exports.users.hasMany(exports.passwords);
exports.passwords.belongsTo(exports.users);