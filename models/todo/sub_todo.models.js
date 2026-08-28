import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema({
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
        ref: 'Todo'
    }
}, { timestamps: true });

export const SubTodo = mongoose.model('SubTodo', subTodoSchema);