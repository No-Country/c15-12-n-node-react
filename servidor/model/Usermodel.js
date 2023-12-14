const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nombre: String,
    email: String,
    descripcion: String,
});

const UserModel = mongoose.model('Usercontact', userSchema);

module.exports = UserModel;
