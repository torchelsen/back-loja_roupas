const produtoController = require('../controllers/produtoController');
const express = require('express');

const router = express.Router();

//produto
router.get('/', produtoController.listar);
router.get('/:id', produtoController.buscarPorid);
router.post('/', produtoController.salvar);
router.put('/:id', produtoController.atualizar);
router.delete('/:id', produtoController.excluir);

module.exports = router;
