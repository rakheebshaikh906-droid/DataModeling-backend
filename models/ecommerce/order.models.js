import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
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
    totalorder: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    }
}, { timestamps: true });

export const Order = mongoose.model('Order', orderSchema);