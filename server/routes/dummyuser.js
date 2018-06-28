var express = require('express');
var router = express.Router();
// var dummyusersController = require('')
var Dummyuser = require('../models/dummyuser');

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log('-------------'+res);
	// Dummyuser.find(function (err, docs) {
	//     // var productChunks = [];
	//     // var chunkSize = 3;
	//     // for (var i = 0; i < docs.length; i += chunkSize) {
	//     //   productChunks.push(docs.slice(i, i + chunkSize));
	//     // }
	//     // res.render('shop/index', { title: 'Welcome to Shopping Cart', products: productChunks });
	//     console.log(docs);
	//     // res.render('dummyusers/index', { title: 'Dummy Users', dummyusers: docs });
	//     res.render('dummyusers/index', { title: 'Dummy Users', dummyusers: 'docs', c: c });
	//   });
	var ab = Dummyuser.find();
	    res.render('dummyusers/index', { title: 'Dummy Users', dummyusers: ab });
	// var c = Dummyuser.count();
  
});

module.exports = router;
