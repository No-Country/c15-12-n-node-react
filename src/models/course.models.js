const mongoose = require("mongoose");

const CourseSchema = mongoose.Schema({
  nombrecurso: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: "Dirección de email inválida",
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
        return /^[a-zA-Z0-9]+$/.test(value);
      },
    },
  },
});

module.exports = mongoose.model("course", CourseSchema);
