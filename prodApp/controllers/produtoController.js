var async = require('async');

exports.index = function(req, res) {

    async.parallel({}, function(err, results) {
        res.render('index', { title: 'Produtos', error: err, data: results });
    });
};
