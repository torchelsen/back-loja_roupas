const express = require("express");
const router = express.Router();


//Roteamento das rotas
   //rota do vendedor
    const vendedorRouter = require('./vendedorRouter.js');

    router.use('/vendedor', vendedorRouter);

    //rota da venda
    const vendaRouter = require('./vendaRouter.js');
    router.use('/venda', vendaRouter);
    
    //rota do produto
    const produtoRouter = require('./produtoRouter.js');
    router.use('/produto', produtoRouter);


module.exports = router;