const express = require('express');

const router = express.Router();

const produto_controller = require('../controllers/produtoController');

router.get('/', produto_controller.index);

router.post('/produtos/create', produto_controller.produto_create_post);


module.exports = router;