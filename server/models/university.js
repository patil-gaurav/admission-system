// University Schema

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var universitySchema = new Schema({
	id: { type: Number, required: true },
	state: { type: Schema.Types.ObjectId, ref: 'State' },
	name: { type: String, required: true },
	address: { type: String, required: true }
});

module.exports = mongoose.model('University', universitySchema);