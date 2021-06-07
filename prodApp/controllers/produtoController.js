const Produto = require('../models/produto');

exports.listar = async (req, res) => {
    const produtos = await Produto.find();

    res.send({ produtos });
    //res.render("produtos", { produtos: produtos });
};

exports.mostrarProduto = async (req, res) => {
    const produto = await Produto.findById(req.params.id);

    res.send({ produto });
    //res.render("produto_detalhe", { produto: produto });
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
    
    res.send({ produto });
    //res.redirect('/produtos');
};

exports.atualizar = async (req, res) => {
    Produto.findById(req.params.id, function(err, produto) {
        
        if(err) res.send(TypeError);

        produto.nome = req.body.nome;
        produto.codigo = req.body.codigo;
        produto.precoVenda = req.body.precoVenda;
        produto.dataCadastro = req.body.dataCadastro;

        produto.save(function(err) {
            
            if(err) res.send(err);

            res.json({ message: 'Usuário Atualizado!' });
        });
    });


    // const produto = await Produto.findById(req.params.id);

    // res.send({ produto });
};

exports.deletar = async (req, res) => {
    await Produto.findByIdAndRemove(req.params.id);

    res.send({ message: id + 'Deletado com sucesso!' });
    //res.redirect('/produtos');
};