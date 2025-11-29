import mongoose from "mongoose";

interface IUser {
    name: string;
    email: string;
    posts?: mongoose.Types.ObjectId[];
}


const userSchema = new mongoose.Schema<IUser>({
    name: String,
    email: String,
    posts: [],
});

export const UserModel = mongoose.model<IUser>("User", userSchema);