//importa o model vendedores
const vendedoresModel = require('../models/vendedoresModel');

class VendedorController{

    async listar(req, res){  
        //select * from vendedor;  
        const resultado = await vendedoresModel.find({});
        res.json(resultado);    
    }

    async buscarPorid(req, res){
        const id  = req.params.id;
        //select * from vendedor where id = 2;
        const resultado = await vendedoresModel.findOne({'_id': id});
        res.json(resultado);
    }

    async salvar(req, res){
        const vendedor = req.body;

        //Gerador de novo código
        //select * from vendedor order by id desc;
        const objeto = await vendedoresModel.findOne({}).sort({'_id': -1});
        vendedor.id = objeto == null ? 1 : objeto.id + 1;

        //insert into conteudo (xxx) values (xxxx);
        const resultado = await vendedoresModel.create(vendedor);
        res.send("Vendedor criado!");
        res.json(resultado);        
    }

    async atualizar(req, res){
        const id = req.params.id;
        const conteudo = req.body;
        //update vendedor set xxxx values xxxx
        await vendedoresModel.findOneAndUpdate({'_id': id}, conteudo);
        res.send("Vendedor atualizado!");
    }

    async excluir(req, res){
        const id = req.params.id;
        await vendedoresModel.findOneAndDelete({'_id': id});
        res.send("Vendedor excluído!");
    }
}

//exporta o objeto VendedorController
module.exports = new VendedorController();