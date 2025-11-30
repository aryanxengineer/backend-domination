import express, { type Request, type Response } from "express";
import mongoose from "mongoose";
import { UserModel } from "./model/userModel.js";
import { PostModel } from "./model/postModel.js";

const app = express();
const PORT = 3000;

app.post("/user", async (req: Request, res: Response) => {
  let user = await UserModel.create({
    name: "Aryan",
    email: "aryan@gmail.com",
  });

  return res.status(201).json({
    message: "User Created",
    success: true,
    data: user,
  });
});

app.post("/post/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    let post = await PostModel.create({
      title: "My third Post",
      content: "This is the body of my third post",
    });

    let user = await UserModel.findById(id);
    user?.posts?.push({
      title: "My third Post",
      content: "This is the body of my third post",
    });

    await user?.save();

    return res.status(201).json({
      message: "Post Created",
      success: true,
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error creating post",
      success: false,
      error: error,
    });
  }
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
