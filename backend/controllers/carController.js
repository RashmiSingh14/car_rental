const Car = require('../models/carModel');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError = require('../middleware/catchAsyncError');


// Enter cars data into db using promise

exports.addCar = catchAsyncError(async (req, res, next) => {
    const carObj = await Car.create(req.body);

    res.status(201).json({
        success: true,
        carObj
    })
});

// Another way of writing code for saving data

// exports.addCar = async (req, res, next) => {
//     const carObj = await Car.create(req.body);

//     res.status(201).json({
//         success: true,
//         carObj
//     })
// }

// Fetch all cars from db
exports.getAllCars = async (req, res) => {

    const carsObj = await Car.find();

    res.status(200).json({
        //message : "Route is working"
        success: true,
        carsObj
    })
}

//Update car details
exports.updateCar = async (req, res, next) => {
    let carObj = await Car.findById(req.params.id);

    if (!carObj) {
        return res.status(500).json({
            success: false,
            message: "Car not found. Please try again."

        })
    }
    carObj = await Car.findByIdAndUpdate(
        req.params.id, req.body,
        {
            new: true,
            runValidators: true,
            useFindAndModify: false
        })
    res.status(200).json({

        success: true,
        carObj
    })
}

// Delete car entry (Make status false)
exports.deleteCar = async (req, res, next) => {
    const carObj = await Car.findById(req.params.id);

    if (!carObj) {
        return res.status(500).json({
            success: false,
            message: "Car not found."

        })
    }

    await carObj.remove();

    res.status(200).json({
        success: true,
        message: "Deleted successfully!"
    })

}

//get car 
exports.getcarDetail = async(req, res, next) => {
    const carObj = await Car.findById(req.params.id);

    if(!carObj){
        // return res.status(500).json({
        //     success: false,
        //     message: "No car found!"
        // })
        return next(new ErrorHandler("No car found!", 404))
    }
    
    res.status(200).json({
        success:true,
        carObj
    })
}
