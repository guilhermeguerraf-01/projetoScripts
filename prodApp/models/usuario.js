const mongoose = require('mongoose');

var UsuarioSchema = new mongoose.Schema({
	nome: {
		type: String, 
		required: true 
	},
	sobrenome: {
		type: String,
		required: true
	},
	username: {
		type: String,
		required: true
	},
	senha: {
		type: String,
		required: true
	},
});

UsuarioSchema.virtual('nome_completo').get(function() {
	return this.nome + this.sobrenome;
});

UsuarioSchema.virtual('username').get(function() {
	return this.username;
});

const Usuario = mongoose.model('Usuario', UsuarioSchema);

module.exports = Usuario;