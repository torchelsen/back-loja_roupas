const pessoas = require('../db/banco');

class PessoaController{


    listar(req, res){
       res.json(pessoas);   
    }

    buscarPorId(req, res){
        const idReq = req.params.id;
        const pessoa = pessoas.find(p => p.id == idReq);
        res.json(pessoa);
    }

    salvar(req, res){
        const pessoa = req.body;
        pessoas.push(pessoa);
        res.json(pessoas);
    }

    atualizar(req, res){
        const id = req.params.id;
        const pessoa = req.body;
        const idx = pessoas.findIndex(p => p.id == id); 
        pessoas[idx] = pessoa;
        res.json(pessoas);
    }

    excluir(req, res){
        const id = req.params.id;
        const idx = pessoas.findIndex(p => p.id == id);
        pessoas.splice(idx, 1);
        res.json(pessoas);
    }

}

module.exports = new PessoaController();