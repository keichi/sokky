var Sequelize = require('sequelize');
var config = require('config');

Sequelize.Sqlite3 = new Sequelize(
	config.db.host,
	config.db.user,
	config.db.password,
	config.db.options
);

var schema = require('./models/schema');

Sequelize.Sqlite3.sync();
