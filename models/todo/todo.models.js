import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: {
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
    status: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    cretedby: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

export const Todo = mongoose.model('Todo', todoSchema);