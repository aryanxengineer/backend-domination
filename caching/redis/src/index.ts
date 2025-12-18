import dotenv from "dotenv";
import express from "express";
import connectionDB from "./config/db.js";
import { UserModel } from "./model/user.model.js";
import client from "./config/redis.js";

dotenv.config();

connectionDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/new-user", async (req, res) => {
  const { username, email } = req.body;

  let newUser = await UserModel.create({ username, email });

  return res.json({
    message: "User created successfully",
    user: newUser,
  });
});

app.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  let user = await UserModel.findById(id);

  return res.json({
    message: "User fetched successfully",
    user,
  });
});

app.listen(3000);
