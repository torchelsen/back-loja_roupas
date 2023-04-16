//importa o model estoque
const estoqueModel = require('../models/estoqueModel');

class EstoqueController{

    async listar(req, res){  
        //select * from venda;  
        const resultado = await estoqueModel.find({});
        res.json(resultado);    
    }

    async buscarPorCodigo(req, res){
        const codigo  = req.params.codigo;
        //select * from venda where codigo = 2;
        const resultado = await estoqueModel.findOne({'codigo': codigo});
        res.json(resultado);
    }

    async salvar(req, res){
        const estoque = req.body;

        //Gerador de novo código
        //select * from venda order by codigo desc;
        const objeto = await estoqueModel.findOne({}).sort({'codigo': -1});
        estoque.codigo = objeto == null ? 1 : objeto.codigo + 1;

        //insert into estoque (xxx) values (xxxx);
        const resultado = await estoqueModel.create(produto);
        res.json(resultado);        
    }

    async atualizar(req, res){
        const codigo = req.params.codigo;
        const estoque = req.body;
        //update venda set xxxx values xxxx
        await estoqueModel.findOneAndUpdate({'codigo': codigo}, estoque);
        res.send("Produto atualizado!");
    }

    async excluir(req, res){
        const codigo = req.params.codigo;
        await estoqueModel.findOneAndDelete({'codigo': codigo});
        res.send("Produto excluído!");
    }
}

//exporta o objeto EstoqueController
module.exports = new EstoqueController();