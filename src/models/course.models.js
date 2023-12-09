const mongoose = require("mongoose");

const nivelesPreciosEnum = {
  basico: "20USD",
  intermedio: "50USD",
  avanzado: "90USD",
};

const instrumentosEnum = ["Violin", "Guitarra", "Arpa", "Ukelele"];
const toLower = (value) => value.toLowerCase();

const CourseSchema = mongoose.Schema({
  nombrecurso: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return instrumentosEnum.map(toLower).includes(value.toLowerCase());
      },
      message: "El instrumento no está en nuestra lista de instrumentos.",
    },
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
        // Obtener el precio correspondiente al nivel seleccionado
        const precioEsperado = nivelesPreciosEnum[this.nivel];

        // Comparar el valor ingresado con el precio esperado
        return value === precioEsperado;
      },
      message: "El precio no corresponde al nivel seleccionado",
    },
    enum: Object.values(nivelesPreciosEnum),
  },
});

module.exports = mongoose.model("course", CourseSchema);
