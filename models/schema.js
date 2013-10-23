var Sequelize = require('sequelize');
var sequelize = require('sequelize').Sqlite3;

var User = sequelize.define('User', {
	id: {
		type: Sequelize.STRING,
		primaryKey: true
	},
	name: Sequelize.STRING,
	provider: Sequelize.STRING
});

var Note = sequelize.define('Note', {
	title: Sequelize.STRING,
	body: Sequelize.TEXT,
	viewCount: {
		type: Sequelize.INTEGER,
		defaultValue: 0
	}
});

var Tag = sequelize.define('Tag', {
	name: Sequelize.STRING
});

User.hasMany(Note, {as: 'notes'});
User.hasMany(Tag, {as: 'tags'});
Tag.hasMany(Note, {as: 'notes'});

exports.User = User;
exports.Note = Note;
exports.Tag= Tag;
