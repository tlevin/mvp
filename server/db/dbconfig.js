var Sequelize = require('sequelize');

var sequelize = new Sequelize('main', 'root', '1234');

//establish user table
exports.users = sequelize.define('users', {
  username : Sequelize.STRING,
  password : Sequelize.STRING
});

//establish password table
exports.password = sequelize.define('password', {
  site_name : Sequelize.STRING,
  password : Sequelize.STRING
});
//sync the server to new schema
sequelize.sync();

//establish relationships between tables
exports.users.hasMany(exports.password);
exports.password.belongsTo(exports.users);