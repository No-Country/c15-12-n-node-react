const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Conexión a la base de datos (cambia 'uri' por tu URI de MongoDB)
mongoose.connect('mongodb+srv://Yuli2209:Yuli2209*@login.rh7hm7f.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a la base de datos:'));
db.once('open', () => {
  console.log('¡Conexión exitosa a la base de datos!');
});

app.use('/', userRoutes);

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
