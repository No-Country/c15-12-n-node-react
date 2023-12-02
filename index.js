const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;
require("dotenv").config();
const courseRoutes = require("./src/routes/course.Routes.js");

//middleware:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", courseRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to my api");
});

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to Mongo DB"))
  .catch((error) => console.log(error));
app.listen(port, () => console.log(`Server listening in port`, port));
