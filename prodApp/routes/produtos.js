var express = require('express');
var router = express.Router();

var produto_controller = require('../controllers/produtoController');

router.get('/', produto_controller.index);


module.exports = router;