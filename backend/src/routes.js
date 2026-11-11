const express = require('express');
const router = express.Router();

const clientesController = require('./controllers/clientesController');
const validarCliente = require('./middlewares/validarCliente');

// Listar todos os clientes
router.get('/clientes', clientesController.listar);

// Cadastrar um cliente
router.post('/clientes', validarCliente, clientesController.cadastrar);

// Atualizar um cliente
router.put('/clientes/:id', validarCliente, clientesController.atualizar);

// Excluir um cliente
router.delete('/clientes/:id', clientesController.excluir);

module.exports = router;