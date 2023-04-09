const vendedores = require('../db/mongo');

class VendedorController{


    listar(req, res){
       res.json(vendedores);   
    }

    buscarPorId(req, res){
        const idReq = req.params.id;
        const vendedor = vendedores.find(p => p.id == idReq);
        res.json(vendedor);
    }

    salvar(req, res){
        const vendedor = req.body;
        vendedores.push(vendedor);
        res.json(vendedores);
    }

    atualizar(req, res){
        const id = req.params.id;
        const vendedor = req.body;
        const idx = vendedores.findIndex(p => p.id == id); 
        vendedores[idx] = vendedor;
        res.json(vendedores);
    }

    excluir(req, res){
        const id = req.params.id;
        const idx = vendedores.findIndex(p => p.id == id);
        vendedores.splice(idx, 1);
        res.json(vendedores);
    }

}

module.exports = new VendedorController();