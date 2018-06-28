var State = require('../models/state');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/admission-system')

var states = [
  new State({
    id: 1,
    name: 'Maharashtra',
    country: 'India',
    capital: 'Mumbai'
  })
];

var done = 0;
for (var i = 0; i < states.length; i++) {
	states[i].save(function (err, result) {
		done++;
		if (done == states.length) {
			exit();
		}
	});
}

function exit() {
	mongoose.disconnect();
}