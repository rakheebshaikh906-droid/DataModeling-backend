import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true

    },
    quality: {
        type: String,
        required: true,
    }
})

export const category = mongoose.model('Category', categorySchema);