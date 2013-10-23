var Sequelize = require('sequelize');
var sequelize = require('sequelize').Sqlite3;

var Note = require('../models/schema').Note;

exports.index = function(req, res){
	Note.findAll()
		.success(function(notes) {
			res.send(notes);
		})
		.error(function(err) {
			res.send(500, err);
		});
};

exports.create = function(req, res){
	res.send('create forum');
};

exports.show = function(req, res){
	Note.find(req.params.note)
		.success(function(note) {
			if (!note) {
				return res.send(404);
			}
			res.send(note);
		})
		.error(function(err) {
			res.send(500, err);
		});
};

exports.update = function(req, res){
	res.send('update forum ' + req.params.forum);
};

exports.destroy = function(req, res){
	res.send('destroy forum ' + req.params.forum);
};
