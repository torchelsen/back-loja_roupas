require('./mongo.js');

const ProdutoModel = require('../models/produtoModel').ProdutoModel;
const produtos = require('./jsons/produtos.json');

const VendasModel = require('../models/vendasModel').VendasModel;
const vendas = require('./jsons/vendas.json');

const VendedorModel = require('../models/vendedorModel').VendedorModel;
const vendedores = require('./jsons/vendedores.json');

async function carregar() {
    try {
        //carrega dados de produtos
        await ProdutoModel.deleteMany({});
        for (const produto of produtos) {
            await ProdutoModel.create(produto);
        }
        console.log('Produtos carregados!');
        
        //carrega dados de vendas
        await VendasModel.deleteMany({});
        for (const venda of vendas) {
            await VendasModel.create(venda);
        }
        console.log('Vendas carregados!');
        
        //carrega dados de vendedores
        await VendedorModel.deleteMany({});
        for (const vendedor of vendedores) {
        await VendedorModel.create(vendedor);
        }
        console.log('Vendedores carregados!');

    } catch (err) {
        console.log(err);
    } finally {
        process.exit();
    }
  }
  
  carregar();