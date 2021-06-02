const express = require('express');

const router = express.Router();

const produto_controller = require('../controllers/produtoController');

router.get('/', produto_controller.index);

router.get('/cadastro', produto_controller.produto_cadastro_get);
router.post('/cadastro', produto_controller.produto_cadastro_post);

router.get('/:id', produto_controller.produto_detalhes);

router.get('/', produto_controller.produto_lista);

module.exports = router;