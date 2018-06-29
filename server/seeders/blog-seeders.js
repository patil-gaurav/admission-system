var Blog = require('../models/blog');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/admission-system')

var blog = new Blog({
	title: 'Second',
	author: 'Ken Jonson',
	body: 'Do not declare methods using ES6 arrow functions (=>).',
	hidden: true,
	meta: {
		votes: 1,
		favs: 2
	}
});

blog.save(function(err) {
	if (err) {
		return console.log(err);
	}
	exit();
});


function exit() {
	mongoose.disconnect();
}
