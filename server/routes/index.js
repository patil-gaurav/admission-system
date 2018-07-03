var passport = require('passport');

var dummyusersCtrl = require('../controllers/dummyusers');
var universityCtrl = require('../controllers/universities');
var userApiCtrl = require('../controllers/api/users');

module.exports = (app) => {
  app.get('/', function(req, res, next) {
  	res.render('index', { title: 'Admission System' });
  })

  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.get('/dummyusers', dummyusersCtrl.dummyusersindex);

  app.get('/universities', universityCtrl.index);

  app.post('/api/signup', userApiCtrl.signup);
  app.post('/api/authenticate', userApiCtrl.authenticate);
  app.get('/api/me', passport.authenticate('jwt', {session: false}), userApiCtrl.me);
};
