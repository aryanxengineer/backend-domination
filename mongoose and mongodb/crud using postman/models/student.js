const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/testingdb');

const studentSchema = mongoose.Schema({
    username: String,
    section : String,
    rollNo: Number,
    universityName: String,
    address: String
})

module.exports = mongoose.model('student', studentSchema);