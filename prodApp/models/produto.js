const mongoose = require('mongoose');

var ProdutoSchema = new mongoose.Schema({
	nome: {
		type: String,
		required: true
	},
	codigo: {
		type: String,
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

ProdutoSchema.virtual('url').get(function () {
	return '/produtos/' + this._id;
});

const Produto = mongoose.model('Produto', ProdutoSchema);

module.exports = Produto;