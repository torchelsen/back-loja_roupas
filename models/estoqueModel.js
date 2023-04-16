//chama o módulo do mongoose
const mongoose = require('mongoose');

//cria um Schema (tabela)
const Schema = mongoose.Schema;

//cria um Schema para o estoque, ou seja, uma tabela de estoque (?)
const EstoqueSchema = new Schema({
    codigo: Number,
    qtdEstoque: Number,
    valor: Number,
    nomeProduto: String
});


module.exports = mongoose.model('Estoque', EstoqueSchema);
