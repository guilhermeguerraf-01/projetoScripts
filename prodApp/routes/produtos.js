const express = require('express');

const router = express.Router();

const produtoController = require('../controllers/produtoController');

router.get('/', produtoController.index);

router.post('/cadastro', produtoController.cadastrar);

router.get('/:id', produtoController.produto_detalhes);

router.get('/produtos', produtoController.listar);

module.exports = router;