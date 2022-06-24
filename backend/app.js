const express = require("express");
const app = express();

app.use(express.json());

//Imports Route
const car = require("./routes/carRoute");

app.use("/api/v1",car);


module.exports = app;