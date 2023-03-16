const pessoaController = require('./controllers/pessoaController');
const express = require("express");
const srv = express();
srv.use(express.json());

srv.get('/pessoas', pessoaController.listar);


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