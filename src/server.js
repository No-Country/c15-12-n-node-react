const express = require('express');
const mongoose = require('mongoose');
const registerController = require('../controller/registerController');
const loginController = require('../controller/loginController');
const connectDB = require('../config/db');
const app = express();
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());



app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Connect to the database
connectDB();

//mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });
//mongoose.connect('mongodb+srv://german:123@login.rh7hm7f.mongodb.net/?retryWrites=true&w=majority');
//mongodb+srv://german:123@login.rh7hm7f.mongodb.net/?retryWrites=true&w=majority
//mongoose.connect('mongodb+srv://dai123:<password>@login.rh7hm7f.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
  res.render('register');
});

app.post('/register', (req, res) => {
  console.log("Registro : "+ JSON.stringify(req.body)); // This will print the body of the request
  registerController.register(req, res);
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  console.log("Login : " + JSON.stringify(req.body)); // This will print the body of the request
  loginController.login(req, res);
});

app.listen(3000, () => console.log('Server running on port 3000'));