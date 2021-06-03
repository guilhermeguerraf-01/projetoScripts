const express = require('express');

const router = express.Router();

const produtoController = require('../controllers/produtoController');

router.get('/', produtoController.listar);

router.get('/:id', produtoController.mostrarProduto);

router.post('/', produtoController.cadastrar);

router.put('/:id', produtoController.atualizar);

router.delete('/:id', produtoController.deletar);

module.exports = router;