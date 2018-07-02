var State = require('../models/state');
var University = require('../models/university');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/admission-system');
var universities = [
    new University({
        id: 1,
        name: 'Savitribai Phule Pune University',
        address: 'Ganeshkhind Pune (population range: over 5,000,000), 411 007, Maharashtra, India'
    }),
    new University({
        id: 2,
        name: 'North Maharashtra University',
        address: 'PO Box 80, Umavi Nagar, Jalgaon (population range: 250,000-499,999), 425001 Maharashtra, India'
    })
  ];
  var done = 0;
State.findOne({ name: 'Maharashtra' }, function (err, stateResult) {
    this.res = stateResult;
    //   for (var i = 0; i < universities.length; i++) {
    //       universities[i].state = stateResult;
    //       universities[i].save(function(err, result) {
    //           done++;
    //           if (done == universities.length) {
    //               exit();
    //           }
    //       });
    //   }

    console.log("1===========================", this.res);
    exit()
});









function exit() {
    console.log("2===========================", this.res)
	mongoose.disconnect();
}