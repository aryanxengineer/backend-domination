import { Schema, model } from "mongoose";

export interface IPost {
  title?: string;
  content: string;
}

const postSchema = new Schema<IPost>({
  title: { type: String, required: true },
  content: { type: String, required: true },
});



export const PostModel = model<IPost>("Post", postSchema);
