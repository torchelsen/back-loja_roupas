const vendaController = require('../controllers/vendaController');
const express = require('express');

const router = express.Router();

//venda
router.get('/', vendaController.listar);
router.get('/:id', vendaController.buscarPorid);
router.post('/', vendaController.salvar);
router.put('/:id', vendaController.atualizar);
router.delete('/:id', vendaController.excluir);

module.exports = router;