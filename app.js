
/**
 * Module dependencies.
 */

var express = require('express');
var resource = require('express-resource');
var http = require('http');
var path = require('path');
var Sequelize = require('sequelize');
var config = require('config');

Sequelize.Sqlite3 = new Sequelize(
	config.db.host,
	config.db.user,
	config.db.password,
	config.db.options
);

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('Btw "sokky" is a quite an odd name.'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function(req, res) { res.sendfile('./public/index.html'); });
app.get('/edit', function(req, res) { res.sendfile('./public/edit.html'); });
app.resource('api/notes', require('./routes/note'));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
