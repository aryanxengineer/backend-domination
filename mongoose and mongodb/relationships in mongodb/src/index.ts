import express, { type Request, type Response } from "express";
import mongoose from "mongoose";
import { UserModel } from "./models/userModel.js";
import { PostModel } from "./models/postModel.js";

const app = express();
const PORT = 3000;

app.post("/user", async (req: Request, res: Response) => {
  let user = await UserModel.create({
    name: "Abhay",
    posts: [],
  });

  return res.status(201).json({
    message: "User Created Successfully",
    user,
  });
});

app.post("/post/:id", async (req: Request, res: Response) => {
  let user = await UserModel.findById(req.params.id);

  let post = await PostModel.create({
    title: "Abhay Post",
    content: "This is abhay first post",
    user: user?._id as unknown as mongoose.Types.ObjectId,
  });

  user?.posts?.push(post._id as unknown as mongoose.Types.ObjectId);
  await user?.save();

  return res.status(201).json({
    message: "Post Added to User Successfully",
    user,
    post,
  });
});

app.get("/users", async (req: Request, res: Response) => {
  let users = await UserModel.find().populate("posts");

  return res.status(200).json({
    message: "Users fetched successfully",
    users,
  });
});

app.get("/posts", async (req: Request, res: Response) => {
  let posts = await PostModel.find().populate("user");
  return res.status(200).json({
    message: "Posts fetched successfully",
    posts,
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
