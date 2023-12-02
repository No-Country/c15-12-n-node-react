const mongoose = require('mongoose');

const uri = 'mongodb+srv://Yuli2209:Yuli2209*@login.rh7hm7f.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a la base de datos:'));
db.once('open', () => {
    console.log('¡Conexión exitosa a la base de datos!');
});

module.exports = db;
