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

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.get('/', function (req, res) {
  res.render('index');
});

app.get('/register', function(req, res){
	res.render("register");
});

app.post('/register', function(req, res){
	User.register(new User({name:req.body.name, email:req.body.email, lastName:req.body.lastname, username: req.body.email}), req.body.password, function(err, user){
		if (err){
			console.log(err);
			return res.render('register');
		}
		passport.authenticate("local")(req,res, function(){
			req.session.error = req.body.name;
			res.redirect('/home');
		});
	});
});

app.post('/login',passport.authenticate('local',{
	successRedirect: "/home",
	failureRedirect: "/"
}),function(req,res){
});

app.get('/home', function(req,res){

	res.render('home', {name: req.session.error});					
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