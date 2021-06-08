const Produto = require('../models/produto');

const async = require('async');

exports.listar = async (req, res) => {
    const produtos = await Produto.find();

    //return res.send({ produtos });
    res.render("produtos", { produtos: produtos });
};

exports.mostrarProduto = async (req, res) => {
    const produto = await Produto.findById(req.params.id);

    // return res.send({ produto });
    res.render("produto_detalhe", { produto: produto });
};

exports.cadastrar = async (req, res) => {
    const produto = new Produto({ 
        nome: req.body.nome,
        codigo: req.body.codigo,
        precoVenda: req.body.precoVenda,
        dataCadastro: req.body.dataCadastro
    });

    produto
        .save(produto)
        .then(data => {
            res.send(data); 
        })
        .catch(err => {
            res.status(500).send(err);
        });
    //return res.send({ produto });
    res.redirect('/produtos');
};

exports.atualizar = async (req, res) => {
    const produto = Produto.findByIdAndUpdate(req.params.id, req.body);
    produto.save(function(error) {
        if(error)
        res.send(error);
        res.json({ message: 'Produto Atualizado!' });
        });
};

exports.deletar = async (req, res) => {
    await Produto.findByIdAndRemove(req.params.id,function(err){
        if (err) res.send(err);
        res.redirect('/produtos');
    });

    //res.send();
    //res.redirect('/produtos');
};