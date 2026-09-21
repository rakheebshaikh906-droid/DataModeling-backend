import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    //patientSchema
    name: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true,
        lowercase: true
    },
    diagnose: {
        type: String,
        required: true,
        lowercase: true
    },
    bloodgroup: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
        required: true
    }
}, { timestamps: true });

export const Patient = mongoose.model('Patient', patientSchema);