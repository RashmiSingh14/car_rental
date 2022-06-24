const express = require("express");
const { getAllCars } = require("../controllers/carController");

const router = express.Router();

router.route("/cars").get(getAllCars);

module.exports = router;