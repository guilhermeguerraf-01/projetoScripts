const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ProdutoSchema = new Schema({
	nome: {
		type: String,
		required: true
	},
	codigo: {
		type: String,
		unique: true,
		required: true
	},
	precoVenda: {
		type: Number,
		required: true
	},
	dataCadastro: {
		type: Date,
		required: true
	}
});

const Produto = mongoose.model('Produto', ProdutoSchema);

module.exports = Produto;