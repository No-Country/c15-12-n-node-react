const mongoose = require("mongoose");

const nivelesPreciosEnum = {
  basico: "20USD",
  intermedio: "50USD",
  avanzado: "90USD",
};

const CourseSchema = mongoose.Schema({
  nombrecurso: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, "El correo electrónico debe tener al menos 5 caracteres"],
    validate: [
      {
        validator: async function (value) {
          const emailExists = await this.constructor.findOne({ email: value });
          return !emailExists;
        },
        message: "Este correo electrónico ya está registrado",
      },
      {
        validator: function (value) {
          // Validación de formato de correo electrónico
          return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
        },
        message: "Formato de correo electrónico no válido",
      },
    ],
  },
  nivel: {
    type: String,
    required: true,
    enum: ["basico", "intermedio", "avanzado"],
  },
  precio: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^[0-9]+USD$/.test(value);
      },
      message: "Formato de precio no válido (por ejemplo, '20USD')",
    },
    enum: Object.values(nivelesPreciosEnum),
  },
});

module.exports = mongoose.model("course", CourseSchema);
