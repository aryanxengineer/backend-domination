import mongoose from "mongoose";

interface IUser {
    name: string;
    posts?: mongoose.Types.ObjectId[];
}

const userSchema = new mongoose.Schema<IUser>({
    name: { type: String, required: true },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
}); 

export const UserModel = mongoose.model<IUser>("User", userSchema);