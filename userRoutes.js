const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserProfile } = require('../controllers/userController');

// Ruta para registrar usuario
router.post('/register', registerUser);

// Ruta para iniciar sesión
router.post('/login', loginUser);

// Ruta para obtener perfil de usuario
router.get('/:id', getUserProfile);

module.exports = router;
