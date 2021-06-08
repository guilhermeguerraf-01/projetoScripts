const express = require('express');

const router = express.Router();

const produtoController = require('../controllers/produtoController');

router.get('/', produtoController.listar);

router.get('/:id', produtoController.mostrarProduto);

router.post('/', produtoController.cadastrar);

router.get('/:id/atualizar', produtoController.atualizarGet);
router.post('/:id/atualizar', produtoController.atualizarPost);

router.get('/:id/deletar', produtoController.deletar);
router.post('/:id/deletar', produtoController.deletar);

module.exports = router;