//precisa editar os métodos desse controller

//importa o model venda
const vendasModel = require('../models/vendasModel');

class VendaController{

    async listar(req, res){  
        //select * from venda;  
        const resultado = await vendasModel.find({});
        res.json(resultado);    
    }

    async buscarPorCodigo(req, res){
        const codigo  = req.params.codigo;
        //select * from venda where codigo = 2;
        const resultado = await vendasModel.findOne({'codigo': codigo});
        res.json(resultado);
    }

    async salvar(req, res){
        const venda = req.body;

        //Gerador de novo código
        //select * from venda order by codigo desc;
        const objeto = await vendasModel.findOne({}).sort({'codigo': -1});
        venda.codigo = objeto == null ? 1 : objeto.codigo + 1;

        //insert into venda (xxx) values (xxxx);
        const resultado = await vendasModel.create(venda);
        res.send("Venda criada!");
        res.json(resultado);        
    }

    async atualizar(req, res){
        const codigo = req.params.codigo;
        const conteudo = req.body;
        //update venda set xxxx values xxxx
        await vendasModel.findOneAndUpdate({'codigo': codigo}, conteudo);
        res.send("Venda atualizado!");
    }

    async excluir(req, res){
        const codigo = req.params.codigo;
        await vendasModel.findOneAndDelete({'codigo': codigo});
        res.send("Venda excluído!");
    }
}

//exporta o objeto VendaController
module.exports = new VendaController();