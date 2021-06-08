const express = require('express');

const router = express.Router();

const produtoController = require('../controllers/produtoController');

router.get('/', produtoController.listar);

router.get('/:id', produtoController.mostrarProduto);

router.post('/', produtoController.cadastrar);

router.put('/:id', produtoController.atualizar);

router.post('/:id/deletar', produtoController.deletar);
router.get('/:id/deletar', produtoController.deletar);

module.exports = router;