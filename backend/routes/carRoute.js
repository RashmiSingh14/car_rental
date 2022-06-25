const express = require("express");
const { getAllCars, addCar, updateCar, deleteCar, getcarDetail } = require("../controllers/carController");

const router = express.Router();

router.route("/cars").get(getAllCars);

router.route("/addnewcar").post(addCar);

//update car details and get car details based on id
router.route("/car/:id").put(updateCar).get(getcarDetail);

//delete car entry 
router.route("/removecar/:id").delete(deleteCar);

module.exports = router;