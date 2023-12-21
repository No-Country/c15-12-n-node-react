// db.js
const mongoose = require('mongoose');
require('dotenv').config();


const connectDB = async () => {
  try {
    // Connect to the MongoDB cluster
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected...');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1);
  }
};

module.exports = connectDB;