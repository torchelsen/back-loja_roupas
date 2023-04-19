//chama o módulo do mongoose
const mongoose = require('mongoose');

//cria um Schema (tabela)
const Schema = mongoose.Schema;

//cria um Schema para o vendedor, ou seja, uma tabela de vendedores (?)
const VendedorSchema = new Schema({
    codigo: Number,
    nome: String,
    ctps: String,
    dataContratacao: Date,
    valorVendido: Number
});


module.exports = mongoose.model('Vendedor', VendedorSchema);
