const express = require('express');
const User = require('../model/user');
const bodyParser = require('body-parser');

const app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).send({ message: 'Invalid email or password' });
      }
      //const isMatch = await bcrypt.compare(password, user.password);
      //if (!isMatch) {
        //return res.status(400).send({ message: 'The password is invalid' });
     // }
      res.send({ message: 'Login successful' });
    } catch (error) {
      res.status(500).send({ error: 'Server error' });
    }
  };

