const vendaController = require('../controllers/vendaController');
const express = require('express');

const router = express.Router();

//venda
router.get('/', vendaController.listar);
router.get('/:codigo', vendaController.buscarPorCodigo);
router.post('/', vendaController.salvar);
router.put('/:codigo', vendaController.atualizar);
router.delete('/:codigo', vendaController.excluir);

module.exports = router;