var express 				= require('express'),
	app						= express(),
	mongoose 				= require('mongoose'),
	User 					= require('./models/user'),
	passport				= require('passport'),
	bodyParser				= require('body-parser'),
	localStrategy 			= require('passport-local'),

	passportLocalMongoose 	= require('passport-local-mongoose');
	seedDB					= require('./seeds');
	seedDB();

	passportLocalMongoose 	= require('passport-local-mongoose'),
	ejs						= require('ejs');


mongoose.connect('mongodb://inakijaneiro:FayghigorgigAf0@ds131942.mlab.com:31942/vidatec', {useNewUrlParser: true });
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended: true}));
app.use(require('express-session')({
	secret: "Next hackathon winners",
	resave: false,
	saveUninitialized: false
}));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.get('/', function (req, res) {
  res.sendFile(__dirname+ '/index.html');
});

app.get('/:user', function(req, res){
	res.render("session");
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