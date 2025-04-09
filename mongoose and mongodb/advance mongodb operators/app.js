const express = require("express");
const mongooseConnection = require('./config/mongoose')
const userModel = require('./models/user')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(3000);
