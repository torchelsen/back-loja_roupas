//importa o model estoque
const produtoModel = require('../models/produtoModel');

class ProdutoController{

    async listar(req, res){  
        //select * from venda;  
        const resultado = await produtoModel.find({});
        res.json(resultado);    
    }

    async buscarPorid(req, res){
        const id  = req.params.id;
        //select * from venda where codigo = 2;
        const resultado = await produtoModel.findOne({'_id': id});
        res.json(resultado);
    }

    async salvar(req, res){
        const produto = req.body;

        //Gerador de novo código
        //select * from venda order by codigo desc;
        const objeto = await produtoModel.findOne({}).sort({'_id': -1});
        produto.id = objeto == null ? 1 : objeto.id + 1;

        //insert into estoque (xxx) values (xxxx);
        const resultado = await produtoModel.create(produto);
        res.send("Produto adicionado ao estoque!");
        res.json(resultado);
    }    
    

    async atualizar(req, res){
        const id = req.params.id;
        const produto = req.body;
        //update venda set xxxx values xxxx
        await produtoModel.findOneAndUpdate({'_id': id}, produto);
        res.send("Produto atualizado!");
    }

    async excluir(req, res){
        const id = req.params.id;
        await produtoModel.findOneAndDelete({'_id': id});
        res.send("Produto excluído!");
    }
}

//exporta o objeto ProdutoController
module.exports = new ProdutoController();