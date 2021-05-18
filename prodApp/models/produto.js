var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProdutoSchema = new Schema(
{
	nome: { type: String, required: true },
	codigo: { type: String, required: true },
	desc: { type: String },
});

// Campo virtual para o nome completo
ProdutoSchema.virtual('nome').get(function() {
	return this.nome;
});

// Campo virtual para o tempo de vida do autor
ProdutoSchema.virtual('codigo').get(function() {
	return this.codigo;
});

// Gera o modelo
module.exports = mongoose.model('Produto', ProdutoSchema);