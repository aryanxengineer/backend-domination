const mongoose = require("mongoose");

const connnectdb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/testingdb");
    console.log("connection successfull");
  } catch (error) {
    console.log("something went wrong ", error);
  }
};

module.exports = connnectdb;
