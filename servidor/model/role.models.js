const mongoose = require("mongoose");
const toLower = (value) => value.toLowerCase();
const RoleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        return instrumentosEnum.map(toLower).includes(value.toLowerCase());
      },
      message: "El rol no está en nuestra lista",
    },
  },
});

module.exports = mongoose.model("Role", RoleSchema);
