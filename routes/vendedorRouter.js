const vendedorController = require('../controllers/vendedorController');
const express = require('express');

const router = express.Router();

//vendedores
router.get('/', vendedorController.listar);
router.get('/:codigo', vendedorController.buscarPorCodigo);
router.post('/', vendedorController.salvar);
router.put('/:codigo', vendedorController.atualizar);
router.delete('/:codigo', vendedorController.excluir);

module.exports = router;