const estoqueController = require('../controllers/estoqueController');
const express = require('express');

const router = express.Router();

//estoque
router.get('/', estoqueController.listar);
router.get('/:codigo', estoqueController.buscarPorCodigo);
router.post('/', estoqueController.salvar);
router.put('/:codigo', estoqueController.atualizar);
router.delete('/:codigo', estoqueController.excluir);

module.exports = router;
// alterar