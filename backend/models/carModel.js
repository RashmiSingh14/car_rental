const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: [true, "Please enter car's brand"],
        trim: true
    },
    model: {
        type: String,
        required: [true, "Please enter car's model"],
        trim: true
    },
    price: {
        type: Number,
        required: [true, "Please enter price/hour"]
    },
    rating: {
        type: Number,
        default: 0
    },
    image: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }],
    registrationNo: {
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default:Date.now
    },
    status:{
        type:Boolean
    }


})

module.exports = mongoose.model("Car",carSchema);