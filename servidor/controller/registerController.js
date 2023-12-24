const express = require('express');
const User = require('../model/user');
const bodyParser = require('body-parser');

const app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());


module.exports = {
  register: async (req, res) => {
    const { email, password, roles } = req.body;

    try {
      // Verifica si el usuario ya existe en la base de datos
      const existingUser = await UserSchema.findOne({ email });

      if (existingUser) {
        return res.status(400).json({ message: "El usuario ya existe" });
      }

      // Hashea la contraseña antes de almacenarla en la base de datos
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      // Busca los documentos de roles correspondientes a los nombres proporcionados
      let roleDocuments = [];

      if (roles && roles.length > 0) {
        roleDocuments = await RoleSchema.find({ name: { $in: roles } });
      } else {
        // Si no se proporcionan roles, asigna automáticamente el rol "User"
        const defaultUserRole = await RoleSchema.findOne({ name: "User" });
        roleDocuments.push(defaultUserRole);
      }

      // Console log de IDs y nombres de los roles después de resolver la promesa
      console.log(
        "IDs de roles proporcionados:",
        roleDocuments.map((role) => role._id)
      );
      console.log(
        "Nombres de roles proporcionados:",
        roleDocuments.map((role) => role.name)
      );

      // Crea un nuevo usuario con la contraseña hasheada y los roles asignados
      const newUser = new UserSchema({
        email,
        password: hashedPassword,
        roles: roleDocuments.map((role) => role._id),
      });
      console.log(newUser);
      // Guarda el nuevo usuario en la base de datos
      const savedUser = await newUser.save();

      // Genera un token con el _id de mongoose, válido por 600 segundos
      const token = jwt.sign({ id: savedUser._id }, process.env.TOKEN_KEY, {
        expiresIn: 600,
      });

      res.json({ token });
    } catch (error) {
      console.error("Error en registerUser:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  },


};

