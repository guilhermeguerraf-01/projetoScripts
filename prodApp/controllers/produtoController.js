const Produto = require('../models/produto');

exports.listar = async (req, res) => {
    const produtos = await Produto.find();

    res.render("produtos", { produtos: produtos });
};

exports.mostrarProduto = async (req, res) => {
    const produto = await Produto.findById(req.params.id);

    res.render("produto_detalhe", { produto: produto });
};

exports.cadastrar = async (req, res) => {
    const produto = new Produto({ 
        nome: req.body.nome,
        codigo: req.body.codigo,
        precoVenda: req.body.precoVenda,
        dataCadastro: req.body.dataCadastro
    });

    produto.save(function(err) {
        if (err) res.send(err);

        res.redirect('/produtos');
    });
};

exports.atualizarGet = async (req, res) => {
    const produto = await Produto.findById(req.params.id);
    
    res.render("produto_form", { produto: produto });
};

exports.atualizarPost = async (req, res) => {
    await Produto.findByIdAndUpdate(req.params.id, req.body, function(err) {
        if (err) res.send(err);
        
        res.redirect('/produtos/' + req.params.id);
    });
};

exports.deletar = async (req, res) => {
    await Produto.findByIdAndRemove(req.params.id, function(err) {
        if (err) res.send(err);

        res.redirect('/produtos');
    });
};