const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.get('/formulario', userController.mostrarFormulario);
router.post('/guardar-usuario', userController.guardarUsuario); // Aquí se maneja la solicitud POST del formulario

router.get('/confirmar-conexion', userController.confirmarConexion);

module.exports = router;
