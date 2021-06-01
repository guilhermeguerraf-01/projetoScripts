const express = require('express');

const router = express.Router();

const produto_controller = require('../controllers/produtoController');

router.get('/', produto_controller.index);

router.get('/produto/create', produto_controller.produto_create_get);
router.post('/produto/create', produto_controller.produto_create_post);

router.get('/produto/:id', produto_controller.produto_detalhes);


module.exports = router;