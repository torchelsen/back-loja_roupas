//importa o model estoque
const produtoModel = require('../models/produtoModel');

class ProdutoController{

    async listar(req, res){  
        //select * from venda;  
        const resultado = await produtoModel.find({});
        res.json(resultado);    
    }

    async buscarPorCodigo(req, res){
        const codigo  = req.params.codigo;
        //select * from venda where codigo = 2;
        const resultado = await produtoModel.findOne({'codigo': codigo});
        res.json(resultado);
    }

    async salvar(req, res){
        const produto = req.body;

        //Gerador de novo código
        //select * from venda order by codigo desc;
        const objeto = await produtoModel.findOne({}).sort({'codigo': -1});
        produto.codigo = objeto == null ? 1 : objeto.codigo + 1;

        //insert into estoque (xxx) values (xxxx);
        const resultado = await produtoModel.create(produto);
        res.send("Produto adicionado ao estoque!");
        res.json(resultado);
    }    
    

    async atualizar(req, res){
        const codigo = req.params.codigo;
        const produto = req.body;
        //update venda set xxxx values xxxx
        await produtoModel.findOneAndUpdate({'codigo': codigo}, produto);
        res.send("Produto atualizado!");
    }

    async excluir(req, res){
        const codigo = req.params.codigo;
        await produtoModel.findOneAndDelete({'codigo': codigo});
        res.send("Produto excluído!");
    }
}

//exporta o objeto ProdutoController
module.exports = new ProdutoController();