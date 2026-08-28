import mongoose from "mongoose";

const product = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    description: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    price: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    image: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    }
}, { timestamps: true });

export const Product = mongoose.model('Product', product);
