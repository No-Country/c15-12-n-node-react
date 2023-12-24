const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const UserSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      minlength: [5, "El correo electrónico debe tener al menos 5 caracteres"],
      validate: [
        {
          validator: async function (value) {
            const emailExists = await this.constructor.findOne({
              email: value,
            });
            return !emailExists;
          },
          message: "Este correo electrónico ya está registrado",
        },
        {
          validator: function (value) {
            // Validación de formato de correo electrónico
            return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
              value
            );
          },
          message: "Formato de correo electrónico no válido",
        },
      ],
    },
    password: {
      type: String,
      required: true,
      minlength: [6, "La contraseña debe tener al menos 6 caracteres"],
    },
    //role se relaciona a user.models,será una colección de roles,mediante la id de rol,uno es a muchos
    roles: [
      {
        type: Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false, // This should not be a type, it's just a configuration option
  }
);

UserSchema.statics.comparePasswords = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword);
};

module.exports = mongoose.model("User", UserSchema);
