import express, { type Request, type Response } from "express";
import mongoose from "mongoose";
import { UserModel } from "./model/userModel.js";
import { PostModel } from "./model/postModel.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/users", async (req: Request, res: Response) => {
  let users = await UserModel.create([
    { name: "Aarav", email: "aarav1@example.com", age: 21, posts: [] },
    { name: "Aarav", email: "aarav2@example.com", age: 23, posts: [] },
    { name: "Rohan", email: "rohan1@example.com", age: 22, posts: [] },
    { name: "Rohan", email: "rohan2@example.com", age: 24, posts: [] },
    { name: "Noah", email: "kabir@example.com", age: 25, posts: [] },
    { name: "Aisha", email: "saanvi@example.com", age: 21, posts: [] },
    { name: "Diya", email: "diya@example.com", age: 22, posts: [] },
    { name: "Noah", email: "meera@example.com", age: 23, posts: [] },
    { name: "Aarav", email: "ananya@example.com", age: 24, posts: [] },
    { name: "Aisha", email: "aisha@example.com", age: 25, posts: [] },
    { name: "Zaid", email: "zaid@example.com", age: 22, posts: [] },
    { name: "Aarav", email: "fatima@example.com", age: 23, posts: [] },
    { name: "Aisha", email: "chris@example.com", age: 24, posts: [] },
    { name: "Emma", email: "emma@example.com", age: 25, posts: [] },
    { name: "Noah", email: "noah@example.com", age: 21, posts: [] },
  ]);
  return res

    .status(201)
    .json({ message: "Users created successfully", data: users });
});

// Create new post
app.post("/post/:id", async (req: Request, res: Response) => {
  let post = await PostModel.create({
    title: "Aarav ki third Post",
    content: "This is the content of the third post.",
    user: req.params.id as unknown as mongoose.Types.ObjectId,
  });

  return res
    .status(201)
    .json({ message: "Post created successfully", data: post });
});

app.get("/test", async (req: Request, res: Response) => {
  let users = await PostModel.aggregate([

    // first query of this aggregation pipeline
    // {
    //   $match: {
    //     age: {
    //       $lt: 24,
    //       $gt: 21,
    //     },
    //   },
    // },

    // second query of this aggregation pipeline
    // {
    //   $group: {
    //     _id: "$age",
    //     users: {
          // $push: {$$ROOT} to push entire document
    //       $push: {
    //         name: "$name",
    //         email: "$email",
    //       },
    //     },
    //   },
    // },

    // third query of this aggregation pipeline
    // {
    //   $lookup: {
    //     from: "users", // collection to join
    //     localField: "user", // field from the input documents
    //     foreignField: "_id", // field from the documents of the "from" collection
    //     as: "userData", // output array field
    //   }
    // },

    // fourth query of this aggregation pipeline ( if any field needs to be renamed or projected ).
    // {
    //   $project: {
    //     title: 1,
    //     mainContent: "$content"
    //   }
    // },

    // fifth query of this aggregation pipeline
    // {
    //   $unwind: "$userData", // for every array element a separate document will be created
    // }

  ]);

  return res
    .status(200)
    .json({ message: "Users fetched successfully", data: users });
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
