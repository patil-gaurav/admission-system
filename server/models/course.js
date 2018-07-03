// Course Schema

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var courseSchema = new Schema({
    id: { type: number, required: true },
    university: { type: Schema.Types.ObjectId, ref: 'University' },
    course_name: { type: String, required: true },
    type: { type: String, required: true }
});

module.exports = mongoose.model('Coourse', courseSchema);