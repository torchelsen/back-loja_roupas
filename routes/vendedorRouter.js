const vendedorController = require('../controllers/vendedorController');
const express = require('express');


const router = express.Router();

//vendedores
router.get('/', vendedorController.listar);
router.get('/:id', vendedorController.buscarPorid);
router.post('/', vendedorController.salvar);
router.put('/:id', vendedorController.atualizar);
router.delete('/:id', vendedorController.excluir);

module.exports = router;