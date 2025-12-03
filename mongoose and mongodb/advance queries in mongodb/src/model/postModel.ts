import mongoose, { Schema, model } from "mongoose";

export interface IPost {
  title: string;
  content: string;
  user: mongoose.Types.ObjectId;
}

const postSchema = new Schema<IPost>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});



export const PostModel = model<IPost>("Post", postSchema);
