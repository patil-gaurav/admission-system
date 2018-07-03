// Api/Users controller
var User = require('../../models/user');
// var passport = require('passport');
// var bcrypt = require('bcrypt');
var jwt = require('jwt-simple');
var config = require('../../../config/database');

module.exports = {
    signup(req, res, next) {
        if(!req.body.email || !req.body.password) {
            res.json({success: false, msg: 'Please pass email and password'});
        } else {
            var newUser = new User({
                email: req.body.email,
                password: req.body.password
            });

            newUser.save(function(err){
                if(err) {
                    return res.json({success: false, msg: 'Username already exists'});
                }
                res.json({success: true, msg: 'Successfully created new user'});
            });
        }
    },

    authenticate(req, res, next) {
        User.findOne({
            email: req.body.email
        }, function(err, user) {
            if (err) {
                return res.send({success: false, msg: 'Something went wrong.'});
            }
            if (!user) {
                res.send({success: false, msg: 'User not found'});
            } else {
                user.comparePassword(req.body.password, function(err, isMatch) {
                    if (isMatch && !err) {
                        var token = jwt.encode(user, config.secret);
                        res.json({success: true, token: 'JWT ' + token});
                    } else {
                        res.json({success: false, msg: 'Authentication faild, wrong password.'});
                    }
                })
                
            }
        })
    },

    me(req, res, next) {
        var token = getToken(req.headers);
        if (token) {
            var decoded = jwt.decode(token, config.secret);
            User.findOne({
                email: decoded.email
            }, function(err, user) {
                if (err) {
                    return res.send({success: false, msg: 'Token not valid'});
                }
                if (!user) {
                    return res.status(403).send({success: false, msg: 'Authentication failed, User not found'});
                } else {
                    res.json({success: true, msg: 'Welcome to my area ' + user.email + '!'});
                }
            });
        } else {
            return res.status(403).send({success: false, msg: 'Token not provided'});
        }
    }
}


getToken = function(headers) {
    if (headers && headers.authorization) {
        var parted = headers.authorization.split(' ');
        if (parted.length == 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
}