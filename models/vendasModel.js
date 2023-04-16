//chama o módulo do mongoose
const mongoose = require('mongoose');

//cria um Schema (tabela)
const Schema = mongoose.Schema;

//cria um Schema para o venda, ou seja, uma tabela de vendas (?)
const VendaSchema = new Schema({
    codigo: Number,
    dataVenda: Date,
    valorTotal: Number
});


module.exports = mongoose.model('Venda', VendaSchema);
