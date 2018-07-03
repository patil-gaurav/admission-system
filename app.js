var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var expressHbs = require('express-handlebars');

var bodyParser = require('body-parser');
var passport = require('passport');
var config = require('./config/database');
var jwt = require('jwt-simple');

var app = express();

mongoose.connect('mongodb://localhost:27017/admission-system');
require('./config/passport')(passport);

// view engine setup
app.set('views', path.join(__dirname, 'server/views'));
app.engine('.hbs', expressHbs({
  defaultLayout: 'layout',
  extname: '.hbs',
  layoutsDir: 'server/views/layouts',
  partialsDir: 'server/views/partials'
}));
app.set('view engine', '.hbs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(passport.initialize())


require('./server/routes')(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
