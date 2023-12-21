// db.js
const mongoose = require('mongoose');
require('dotenv').config();


const connectDB = async () => {
  try {
    // Connect to the MongoDB cluster
    await mongoose.connect('mongodb+srv://dai123:Dai123@login.rh7hm7f.mongodb.net/?retryWrites=true&w=majority');
    console.log('MongoDB connected...');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1);
  }
};

module.exports = connectDB;