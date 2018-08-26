var express 	= require('express'),
	app			= express(),
	mongoose 	= require('mongoose'),
	User 		= require('./models/user');

mongoose.connect('mongodb://inakijaneiro:FayghigorgigAf0@ds131942.mlab.com:31942/vidatec', {useNewUrlParser: true });
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");



const mongoose = require('mongoose');
const path = require('path');
const passport = require('passport');
const flash = require('connect-flash');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');

//Conexion
//mongoose.connect('mongodb://localhost/3000',{


//})

app.get('/', function (req, res) {
  res.sendFile(__dirname+'/html/page.html');
});

// Port opening
app.listen(process.env.PORT || 3000, function(){
	if (process.env.PORT){
		console.log("SERVER RUNNING ON PORT " + process.env.PORT);
	}
	else{
		console.log("SERVER RUNNING ON PORT 3000");
	}
});