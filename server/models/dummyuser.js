var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	streetAddress: { type: String, required: true },
	city: { type: String, required: true },
	state: { type: String, required: true },
	country: { type: String, required: true },
	email: { type: String, required: true },
	avtar: { type: String, required: true }
});

module.exports = mongoose.model('Dummyuser', schema);
