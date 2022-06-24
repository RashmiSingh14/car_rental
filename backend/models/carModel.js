const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    brand : {
        type:String,
        required:[true,"Please enter car's brand"],
        trim:true
    },
    model:{
        type:String,
        required:[true,"Please enter car's model"]
    },
    price:{
        type: Number,
        required:[true, "Please enter price/hour"]
    },
    
})