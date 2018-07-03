var JwtStrategy     = require('passport-jwt').Strategy;
var ExtractJwt      = require('passport-jwt').ExtractJwt;

// load the use models
var User    = require('../server/models/user');
var config  = require('../config/database');

module.exports = function(passport) {
    var opts = {};
    opts.secretOrKey = config.secret;
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
    passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
        User.findOne({id: jwt_payload.id}, function(err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                done(null, user);
            } else {
                done(null, false);
            }
        })
    }))
}
