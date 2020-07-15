const mongoose = require('mongoose');

const ToolSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    typeOfTool: {
        type: Number,
        required: true,
    },
    code: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        default: 1
    }
});

mongoose.model('Tool', ToolSchema);