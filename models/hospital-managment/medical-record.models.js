import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true
    },
    dignoses: {
        type: String,
        required: true,
        lowercase: true
    },
    hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital'
    },
    duration: {
        type: number,
        required: true,
        lowercase: true
    }
})

export const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema);