const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
// const authMiddleware = require('../middleware/authMiddleware'); // Desabilitado para testes

router.get('/users', userController.getAllUsers); // Removido authMiddleware para testes
router.get('/users/:id', userController.getUserById); // Removido authMiddleware para testes
router.post('/users', userController.createUser); // Removido authMiddleware para testes
router.put('/users/:id', userController.updateUser); // Removido authMiddleware para testes
router.delete('/users/:id', userController.deleteUser); // Removido authMiddleware para testes

module.exports = router;
