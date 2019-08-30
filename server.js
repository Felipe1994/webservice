var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var mongoose = require('mongoose');
var Message = require('./api/models/msgModels');
var bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/msgdb');
mongoose.connect('mongodb://heroku_3crx0kh0:ImperiumX1994!@ds335957.mlab.com:35957/heroku_3crx0kh0');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/msgRoutes');

routes(app);

app.listen(port);

console.log('Message RESTful API server started on: ' + port);