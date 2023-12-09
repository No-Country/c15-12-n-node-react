const mongoose = require("mongoose");
const validateMongoDbId = (id) => {
  const isValid = mongoose.Types.ObjectId.isValid(id);
  if (!isValid) throw new Error("Esta ID no es válida o no fué encontrada");
};
module.exports = validateMongoDbId;
