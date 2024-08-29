const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: String,
    dateOfBirth: Date,
    socialMedia: {
        instagram: String,
        twitter: String,
    }
});

module.exports = userSchema;