import { Schema, model } from "mongoose";

interface IPost {
  title: string;
  content: string;
  userId: Schema.Types.ObjectId;
}

const postSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
});


export const PostModel = model<IPost>("Post", postSchema);