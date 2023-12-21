const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const nivelesPreciosEnum = {
  basico: "20",
  intermedio: "50",
  avanzado: "90",
};
const instrumentosEnum = ["Violin", "Guitarra", "Arpa", "Ukelele"];
const toLower = (value) => value.toLowerCase();

const CourseSchema = mongoose.Schema({
  curso: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return instrumentosEnum.map(toLower).includes(value.toLowerCase());
      },
      message: "El curso no está en nuestra lista de cursos",
    },
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

  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
});

// Antes de guardar, hashear la contraseña
CourseSchema.pre("save", async function (next) {
  try {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;

    // Verificar si el usuario está autenticado y establecer la disponibilidad del curso
    const usuarioAutenticado = verificarAutenticacion(); //
    this.disponibleParaAutenticados = usuarioAutenticado;

    next();
  } catch (error) {
    next(error);
  }
});
module.exports = mongoose.model("course", CourseSchema);

