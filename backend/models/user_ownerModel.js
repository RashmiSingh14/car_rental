const mongoose = require('mongoose');

const user_ownerRegisterSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    mobile_number: {
        country_code: {
            type: String,
            required: true,
            default: "+91"
        },
        number: {
            type: String,
            required: true,
            trim: true,
            index: {
                unique: true
            }
        }
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        sparse: true
    },
    hash: {
        type: String,
        required: true
    },
    is_owner: {
        type: Boolean,
        required: true,
        default: false,
        index: true
    },
    is_blocked: {
        type: Boolean,
        required: true,
        default: false,
        index: true
    }
}, { timestamps: true });

const userOwnerRegisterModel = mongoose.model('User_registers', user_ownerRegisterSchema);
module.exports = { userOwnerRegisterModel };