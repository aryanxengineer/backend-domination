const mongoose = require('mongoose');
import Joi, { object } from 'joi';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const validateUser = (user) => {
    let schema = object({
        name: Joi.string().min(3).max(50).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required()
    });

    let { error } = schema.validate(user, { abortEarly: false });
    return error;
}




const User = mongoose.model('User', userSchema);

module.exports = {  User, validateUser };