import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true
    },
    age: {
        type: Number,
        required: true,
        lowercase: true
    },
    phone: {
        type: Number,
        required: true,
        lowercase: true
    },
    address: {
        type: String,
        required: true,
        lowercase: true
    },
    qulification: {
        type: String,
        required: true,
        lowercase: true
    },
    previousHospital: {
        type: String,
        required: true,
        lowercase: true
    },
    specialization: {
        type: String,
        required: true,
        lowercase: true
    },
    experience: {
        type: String,
        required: true,
        lowercase: true
    },
    fees: {
        type: String,
        required: true,
        lowercase: true
    }

}, { timestamps: true });

export const Doctor = mongoose.model('Doctor', doctorSchema);