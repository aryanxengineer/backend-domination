import mongoose from "mongoose";


// This is the type of embedded document in express.
export interface IUser {
    name: string;
    email: string;
    age: number;
    posts?: mongoose.Types.ObjectId[];
}


const userSchema = new mongoose.Schema<IUser>({
    name: String,
    email: String,
    age: Number,
    posts: [mongoose.Schema.Types.ObjectId, { ref: "Post" }],
});

export const UserModel = mongoose.model<IUser>("User", userSchema);