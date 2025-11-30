import mongoose from "mongoose";
import { PostModel, type IPost } from "./postModel.js";


// This is the type of embedded document in express.
export interface IUser {
    name: string;
    email: string;
    posts?: [IPost];
}


const userSchema = new mongoose.Schema<IUser>({
    name: String,
    email: String,
    posts: [PostModel.schema],
});

export const UserModel = mongoose.model<IUser>("User", userSchema);