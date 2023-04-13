//chama o banco
require("./db/mongo");
const express = require("express");
const srv = express();
srv.use(express.json());

//Roteamento das rotas
    //rota do vendedor
    const vendedorRouter = require('./routes/vendedorRouter');
    srv.use('/vendedor', vendedorRouter);

    //rota da venda
    const vendaRouter = require('./routes/vendaRouter');
    srv.use('/venda', vendaRouter);
    
    //rota do estoque
    const estoqueRouter = require('./routes/estoqueRouter');
    srv.use('/estoque', estoqueRouter);

//servidor fica ouvindo a porta 3000
srv.listen(3000, function(){
    console.log('Servidor rodando em http://localhost:3000');
});