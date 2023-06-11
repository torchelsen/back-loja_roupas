const mongoose = require('mongoose');
const ProdutoModel = require('../models/produtoModel');
const produtos = require('./jsons/produtos.json');
const VendasModel = require('../models/vendasModel');
const vendas = require('./jsons/vendas.json');
const VendedorModel = require('../models/vendedoresModel');
const vendedores = require('./jsons/vendedores.json');

async function carregar() {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://localhost:27017/lojaFisica', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  console.log(ProdutoModel);
    // Carrega dados de produtos
    await ProdutoModel.deleteMany({});
    for (const produto of produtos) {
      await ProdutoModel.create(produto);
    }
    console.log('Produtos carregados!');

    // Carrega dados de vendas
    await VendasModel.deleteMany({});
    for (const venda of vendas) {
      await VendasModel.create(venda);
    }
    console.log('Vendas carregados!');

    // Carrega dados de vendedores
    await VendedorModel.deleteMany({});
    for (const vendedor of vendedores) {
      await VendedorModel.create(vendedor);
    }
    console.log('Vendedores carregados!');
  } catch (err) {
    console.log(err);
  } finally {
    // Disconnect from MongoDB
    mongoose.disconnect();
    process.exit();
  }
}

carregar();
