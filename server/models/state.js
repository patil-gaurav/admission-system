var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	id: { type: Number, required: true },
	name: { type: String, required: true },
	country: { type: String, required: true },
	capital: { type: String, required: true }
});

module.exports = mongoose.model('State', schema);
