//importa o model vendedores
const vendedoresModel = require('../models/vendedoresModel');

class VendedorController{

    async listar(req, res){  
        //select * from vendedor;  
        const resultado = await vendedoresModel.find({});
        res.json(resultado);    
    }

    async buscarPorCodigo(req, res){
        const codigo  = req.params.codigo;
        //select * from vendedor where codigo = 2;
        const resultado = await vendedoresModel.findOne({'codigo': codigo});
        res.json(resultado);
    }

    async salvar(req, res){
        const vendedor = req.body;

        //Gerador de novo código
        //select * from vendedor order by codigo desc;
        const objeto = await vendedoresModel.findOne({}).sort({'codigo': -1});
        vendedor.codigo = objeto == null ? 1 : objeto.codigo + 1;

        //insert into conteudo (xxx) values (xxxx);
        const resultado = await vendedoresModel.create(vendedor);
        res.json(resultado);        
    }

    async atualizar(req, res){
        const codigo = req.params.codigo;
        const vendedor = req.body;
        //update vendedor set xxxx values xxxx
        await vendedoresModel.findOneAndUpdate({'codigo': codigo}, conteudo);
        res.send("Vendedor atualizado!");
    }

    async excluir(req, res){
        const codigo = req.params.codigo;
        await vendedoresModel.findOneAndDelete({'codigo': codigo});
        res.send("Vendedor excluído!");
    }
}

//exporta o objeto VendedorController
module.exports = new VendedorController();