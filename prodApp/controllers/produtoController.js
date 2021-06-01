const Produto = require('../models/produto');

const async = require('async');

const { body,validationResult } = require('express-validator');

exports.index = function(req, res) {
    async.parallel({}, function(err, results) {
        res.render('produtos', { title: 'Produtos', error: err, data: results });
    });
};

exports.produto_detalhes = function(req, res, next) {
    async.parallel({
        produto: function(callback) {
            Produto.findById(req.params.id).exec(callback);
        },

    }, function(err, results) {
        if (err) return next(err);

        if (results.produto == null) {
            var err = new Error('Produto não encontrado');

            err.status = 404;
            return next(err);
        }

        res.render('produto_detalhe');
    });

};

exports.produto_create_get = function(req, res, next) {
    async.parallel({}, function(err, results) {
        if (err) return next(err);

        res.render('prod_form', { title: 'Cadastrar Produto' });
    });
};

exports.produto_create_post = [
    body('nome', 'Nome é um campo obrigatório.').trim().isLength({ min: 1 }).escape(),
    body('codigo', 'Codigo é um campo obrigatório.').trim().isLength({ min: 1 }).escape(),
    body('precoVenda', 'Preço de Venda é um campo obrigatório.').trim().isLength({ min: 1 }).escape(),
    body('dataCadastro', 'Data de Cadastro é um campo obrigatório').trim().isLength({ min: 1 }).escape(),

    (req, res, next) => {
        const errors = validationResult(req);

        var produto = new Produto({ 
            nome: req.body.nome,
            codigo: req.body.codigo,
            precoVenda: req.body.precoVenda,
            dataCadastro: req.body.dataCadastro
        });

        if (!errors.isEmpty()) {
            async.parallel({}, function(err) {
                if (err) return next(err);

                res.render('prod_form', { title: 'Cadastrar Produto', produto: produto, errors: errors.array() });
            });

            return;
        } else {
            produto.save(function (err) {
                if (err) return next(err);

                res.redirect(produto.url);
            });
        }
    }
];