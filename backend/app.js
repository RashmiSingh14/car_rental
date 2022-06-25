const express = require("express");
const app = express();
const errorMiddleware = require('./middleware/error');

app.use(express.json());

//Import Route
const car = require("./routes/carRoute");

app.use("/", car);

//middleware for errors
app.use(errorMiddleware)

module.exports = app;