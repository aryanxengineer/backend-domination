import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    posts: [],
});
export const UserModel = mongoose.model("User", userSchema);
//# sourceMappingURL=userModel.js.map