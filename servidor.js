const vendedorController = require('./controllers/vendedorController');
const vendaController = require('./controllers/vendaController');
const estoqueController = require('./controllers/estoqueController');
const express = require("express");
const srv = express();
srv.use(express.json());

srv.get('/vendedores', vendedorController.listar);
srv.get('/vendedores/:id', vendedorController.buscarPorId);
srv.post('/vendedores', vendedorController.salvar);
srv.put('/vendedores/:id', vendedorController.atualizar);
srv.delete('/vendedores/:id', vendedorController.excluir);

srv.get('/vendas', vendaController.listar);
srv.get('/vendas/:id', vendaController.buscarPorId);
srv.post('/vendas', vendaController.salvar);
srv.put('/vendas/:id', vendaController.atualizar);
srv.delete('/vendas/:id', vendaController.excluir);

srv.get('/estoque', estoqueController.listar);
srv.get('/estoque/:id', estoqueController.buscarPorId);
srv.post('/estoque', estoqueController.salvar);
srv.put('/estoque/:id', estoqueController.atualizar);
srv.delete('/estoque/:id', estoqueController.excluir);

require("./db/mongo");
const mongoose = require('mongoose');

const ModeloExemplo = mongoose.model('Exemplo', {nome: String});
const objetoExemplo = new ModeloExemplo({nome: "Apenas um teste!"});
objetoExemplo.save().then(()=> console.log("Salvou!"));


//srv.get(rota, função);
srv.get('/', function(req, res){
    console.log('srv.get()');
    res.send('srv.get()');
});

srv.post('/', function(req, res){
    console.log('srv.post()');
    res.send('srv.post()');
});

srv.put('/', function(req, res){
    console.log('srv.put()');
    res.send('srv.put()');
});

srv.delete('/', function(req, res){
    console.log('srv.delete()');
    res.send('srv.delete()');
});

srv.listen(3000, function(){
    console.log('Servidor rodando em http://localhost:3000');
});