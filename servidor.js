const pessoaController = require('./controllers/pessoaController');
const express = require("express");
const srv = express();
srv.use(express.json());

srv.get('/pessoas', pessoaController.listar);
srv.get('/pessoas/:id', pessoaController.buscarPorId);
srv.post('/pessoas', pessoaController.salvar);
srv.put('/pessoas/:id', pessoaController.atualizar);
srv.delete('/pessoas/:id', pessoaController.excluir);

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