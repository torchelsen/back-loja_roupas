//precisa editar os métodos desse controller

//importa o model venda
const vendasModel = require('../models/vendasModel');

class VendaController{

    async listar(req, res){  
        //select * from venda;  
        const resultado = await vendasModel.find({});
        res.json(resultado);    
    }

    async buscarPorid(req, res){
        const id  = req.params.id;
        //select * from venda where id = 2;
        const resultado = await vendasModel.findOne({'_id': id});
        res.json(resultado);
    }

    async salvar(req, res){
        const venda = req.body;

        //Gerador de novo código
        //select * from venda order by id desc;
        const objeto = await vendasModel.findOne({}).sort({'_id': -1});
        venda.id = objeto == null ? 1 : objeto.id + 1;

        //insert into venda (xxx) values (xxxx);
        const resultado = await vendasModel.create(venda);
        res.send("Venda criada!");
        res.json(resultado);        
    }

    async atualizar(req, res){
        const id = req.params.id;
        const conteudo = req.body;
        //update venda set xxxx values xxxx
        await vendasModel.findOneAndUpdate({'_id': id}, conteudo);
        res.send("Venda atualizado!");
    }

    async excluir(req, res){
        const id = req.params.id;
        await vendasModel.findOneAndDelete({'_id': id});
        res.send("Venda excluído!");
    }
}

//exporta o objeto VendaController
module.exports = new VendaController();