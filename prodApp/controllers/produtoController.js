const Produto = require('../models/produto');

const async = require('async');

exports.listar = async (req, res) => {
    const produtos = await Produto.find();

    //return res.send({ produtos });
    res.render("produtos", { produtos: produtos });
};

exports.mostrarProduto = async (req, res) => {
    const produto = await Produto.findById(req.params.id);

    res.send({ produto });
};

exports.cadastrar = async (req, res) => {
    const produto = new Produto({ 
        nome: req.body.nome,
        codigo: req.body.codigo,
        precoVenda: req.body.precoVenda,
        dataCadastro: req.body.dataCadastro
    });

    produto.save().then(data => { res.send(data); }).catch(err => { res.status(500).send(err); });
    //return res.send({ produto });
    res.redirect('/produtos');
};

exports.atualizar = async (req, res) => {
    const produto = await Produto.findById(req.params.id);

    res.send({ produto });
};

exports.deletar = async (req, res) => {
    await Produto.findByIdAndRemove(req.params.id);

    res.send();
};