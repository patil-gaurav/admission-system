var Dummyuser = require('../models/dummyuser');
var mongoose = require('mongoose');
var faker = require('faker');

mongoose.connect('mongodb://localhost:27017/admission-system')

console.log('====================Creating dummyusers');
var done = 0;
for (var i = 0; i < 99; i++) {
	var dummyuser = new Dummyuser({
	    firstName: faker.name.firstName(),
	    lastName: faker.name.lastName(),
		streetAddress: faker.address.streetAddress(),
		city: faker.address.city(),
		state: faker.address.state(),
		country: faker.address.country(),
		email: faker.internet.email(),
		avtar: faker.image.avatar()
	  });
	dummyuser.save(function(err, result) {
		if (err) {
			console.log("-----Error-----" + err);
		}
		done++;
		if (done == 99) {
			exit();
		}
	});
}
console.log('====================Created dummyusers');

function exit() {
	mongoose.disconnect();
}