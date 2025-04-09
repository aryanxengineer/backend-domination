const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: Number,
    age: Number,
    isUser: Boolean
})

module.exports = mongoose.model('user', userSchema);