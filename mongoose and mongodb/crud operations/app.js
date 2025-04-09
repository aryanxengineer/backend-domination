const express = require("express");
const connnectdb = require("./config/mongoose");
const connenct = connnectdb();
const userModel = require("./models/user");
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.get('/create', async (req, res) => {
//     const user = await userModel.create({
//         username: 'aryan',
//         email: 'aryan@gmail.com',
//         pasword: '123',
//         city: 'kanpur',
//         age: 21,
//     })
//     res.send(user);
// });

// app.get('/read', async (req, res) => {
//     const user = await userModel.findOne({username: 'aryan'});
//     res.send(user);
// });

// app.get("/update", async (req, res) => {
//   const user = await userModel.findOneAndUpdate(
//     { username: "aryan" },  // select which one is updated
//     { username: "abhay" },  // update the value
//     { new: true }           // this allows to show new value in console or in our response.
//   );
//   res.send(user);
// });

// app.get("/delete", async (req, res) => {
//   const user = await userModel.findOneAndDelete({ username: "abhay" });
//   res.send(user);
// });

app.listen(3000);
