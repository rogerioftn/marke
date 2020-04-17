var express = require('express');

var express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
//const Func = require('./models/colaborador');
//const db = require('./models/db');
const routes = require('./routes/route');

const Handlebars = require('handlebars');
const expressHandlebars = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');


var port = process.env.PORT || 3000;
var app = express(),
path = require('path'),
publicDir = path.join(__dirname,'views');
	
	const Sequelize = require ("sequelize")
	app.engine('handlebars', expressHandlebars({
	    handlebars: allowInsecurePrototypeAccess(Handlebars)
	}));
	
	app.set('view engine', 'handlebars')
	//body parser
	app.use(bodyParser.urlencoded({extended : false}))
	app.use(bodyParser.json())

	app.use(express.static(publicDir))
	//use Grupo de Rotas
	app.use('/', routes) 

app.use(express.static(publicDir))

app.listen(port);
module.exports = app;
