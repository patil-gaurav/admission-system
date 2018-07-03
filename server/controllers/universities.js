var University = require('../models/university');

module.exports = {
    index(req, res, next) {
        University.find(function(err, result) {
            res.render('universities/index', {universities: result});
        })
    }
}