const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other']
    },
    mobileNo: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    }
});

module.exports = mongoose.model('Feedback', feedbackSchema);
