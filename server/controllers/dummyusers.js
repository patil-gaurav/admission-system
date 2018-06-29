var Dummyuser = require('../models/dummyuser');

module.exports = {
  dummyusersindex(req, res, next) {
    Dummyuser.find(function (err, users) {
      res.render('dummyusers/index', {dummyusers: users});
    });
  }
};
