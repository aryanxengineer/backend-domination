const express = require("express");
const studentModel = require("./models/student");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/create", async (req, res) => {
  const { username, section, rollNo, universityName, address } = req.body;
  const student = await studentModel.create({
    username,
    section,
    rollNo,
    universityName,
    address,
  });
  res.send(student);
});

app.get("/read/:username", async (req, res) => {
  const user = await studentModel.findOne({username : req.params.username});
  res.send(user);
});

app.patch("/update/:section", async (req, res) => {
  const student = await studentModel.findOneAndUpdate({section: req.params.section}, {username: req.body.username}, {new : true});
  res.send(student);
});

app.get("/delete/:username", async (req, res) => {
  const student = await studentModel.findOneAndDelete({username: req.params.username});
  res.send(student);
});

app.listen(3000);
