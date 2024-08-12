const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    contact: {
        type: Number,
        required: true,
    },
    testCompleted: [
        {
            id: {
                type: mongoose.Schema.ObjectId,
                ref: 'Exams',
            },
            position: {
                type: String,
            }
        },
    ],
    latestAnswerBooklet: {
        type: mongoose.Schema.ObjectId,
        ref: 'Questions',
    }
})

module.exports = mongoose.model('User', userSchema);