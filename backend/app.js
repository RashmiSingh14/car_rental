const express = require("express");
const app = express();

app.use(express.json());

//Imports Route
const car = require("./routes/carRoute");

app.use("/", car);


module.exports = app;