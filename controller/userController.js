const UserModel = require('../model/UserModel');

const userController = {
    mostrarFormulario: (req, res) => {
        res.sendFile('formulario.html', { root: './view' });
    },

    guardarUsuario: async (req, res) => {
        const { nombre, email, descripcion } = req.body;
        const nuevoUsuario = new UserModel({ nombre, email, descripcion });

        try {
            await nuevoUsuario.save();
            //res.send('Usuario correctamente guardado');
            res.status(201).send({ message: 'Contacto guardado correctamente' });
            console.log('Contacto guardado correctamente');
        } catch (error) {
            res.status(500).send('Error al guardar el usuario');
        }
    },

    confirmarConexion: (req, res) => {
        if (db.readyState === 1) {
            res.send('Conexión establecida con éxito');
        } else {
            res.status(500).send('Error en la conexión');
        }
    }
};

module.exports = userController;
