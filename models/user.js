var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	name: {type: String, required:true},
	lastName: {type: String, required: true},
	password: String,
	email: String,
	schedule: {
		class:[{
			cName: String,
			teacher: String,
			place: String,
			day:[String],
			startTime: Date,
			endTime: Date,
			homework: String
		}],
		event:[{
			eName: String,
			place: String,
			day:[String],
			startTime: Date,
			endTime: Date,
			note: String
		}]
	}	
});

module.exports = mongoose.model("User", userSchema);