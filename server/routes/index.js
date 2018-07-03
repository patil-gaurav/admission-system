var dummyusersCtrl = require('../controllers/dummyusers');
var universityCtrl = require('../controllers/universities');

module.exports = (app) => {
  app.get('/', function(req, res, next) {
  	res.render('index', { title: 'Admission System' });
  })

  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.get('/dummyusers', dummyusersCtrl.dummyusersindex);

  app.get('/universities', universityCtrl.index);
};
