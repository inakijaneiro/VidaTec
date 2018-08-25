var express = require('express'),
	app		= express();


app.get('/', function (req, res) {
  res.send('Hello World!');
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