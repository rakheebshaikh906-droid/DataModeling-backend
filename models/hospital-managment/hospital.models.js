import mongoose from "mongoose";

const hospital = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true
    },
    address: {
        type: String,
        required: true,
        lowercase: true
    },
    specialization: {
        type: String,
        lowercase: true
    },
    doctors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor'
    }],
    patients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    }]
}, { timestamps: true })

export const Hospital = mongoose.model('Hospital', hospital);