
const mongoose = require('mongoose');

const Userschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
})

const UserModel = mongoose.model('User', Userschema);

module.exports = UserModel;
// This code defines a Mongoose schema and model for a User in a MongoDB database.
