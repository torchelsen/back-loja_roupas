//Chama o banco
require("./db/mongo.js");
const express = require("express");
const srv = express();
srv.use(express.json());
const cors = require("cors");
srv.use(cors());

//Index e rotas de acesso livre
srv.get("/", function (req, res) {
    const mensagem =
      "Servidor LojaFisica rodando...<br><br>" +
      '<a href="http://localhost:3005/doc">Listar APIs</a>';
    res.send(mensagem);
});

//Rotas
const routes = require("./routes/routes.js");
srv.use(routes);

//Inicialização
srv.listen(3005, function(){
    console.log('Servidor rodando em http://localhost:3005');
});