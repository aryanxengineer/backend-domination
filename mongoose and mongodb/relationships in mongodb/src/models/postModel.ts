import mongoose from "mongoose";

interface IPost {
    title: string;
    content: string;
    user: mongoose.Types.ObjectId;
}

const postSchema = new mongoose.Schema<IPost>({
    title: { type: String, required: true },
    content: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

export const PostModel = mongoose.model<IPost>("Post", postSchema);