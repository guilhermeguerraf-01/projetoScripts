var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = new Schema(
{
	nome: { type: String, required: true },
	sobrenome: { type: String, required: true },
	username: { type: String, required: true },
	senha: { type: String, required: true },
});

// Campo virtual para o nome completo
UsuarioSchema.virtual('nome_completo').get(function() {
	return this.nome + this.sobrenome;
});

// Campo virtual para o tempo de vida do autor
UsuarioSchema.virtual('username').get(function() {
	return this.username;
});

// Gera o modelo
module.exports = mongoose.model('Usuario', UsuarioSchema);