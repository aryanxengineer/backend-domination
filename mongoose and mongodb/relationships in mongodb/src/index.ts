import express from "express";
import mongoose from "mongoose";
import { UserModel } from "./model/userModel.js";

const app = express();
const PORT = 3000;

app.post("/user", (req, res) => {
  let user = UserModel.create({
    name: "Aryan",
    email: "aryan@gmail.com",
  });

  return res.status(201).json({
    message: "User Created",
    success: true,
    data: user,
  });

});

async function startServer() {
  try {
    await mongoose.connect(
      "mongodb+srv://aryanxengineer_db_user:RiEo92mBnBZa7Odj@cluster0.dhbsmtv.mongodb.net/?appName=Cluster0"
    );

    console.log("🌿 Connected to MongoDB Successfully");

    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log("❌ MongoDB Connection Failed:", error);
  }
}

startServer();
