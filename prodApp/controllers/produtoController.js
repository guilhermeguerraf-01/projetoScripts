const Produto = require('../models/produto');

const async = require('async');

exports.index = function(req, res) {
    async.parallel({}, function(err, results) {
        res.render('produtos', { title: 'Produtos', error: err, data: results });
    });
};

exports.listar = async function (req, res, next) {
    var produtos = await Produto.find();

    res.send(produtos);
    res.render("produtos", { produtos: protutos });
};

exports.produto_detalhes = function(req, res, next) {
    async.parallel({
        produto: function(callback) {
            Produto.findById(req.params.id);
        },

    }, function(err, results) {
        if (err) return next(err);

        if (results.produto == null) {
            var err = new Error('Produto não encontrado');

            err.status = 404;
            return next(err);
        }

        res.render('produto_detalhe', { title: 'Detalhes', produto });
    });

};

exports.cadastrar = function (req, res, next) {
    var produto = new Produto({ 
        nome: req.body.nome,
        codigo: req.body.codigo,
        precoVenda: req.body.precoVenda,
        dataCadastro: req.body.dataCadastro
    });

    produto.save(produto).then(data => { res.send(data); }).catch(err => { res.status(500).send(err); })
    
    res.redirect('/produtos');
};