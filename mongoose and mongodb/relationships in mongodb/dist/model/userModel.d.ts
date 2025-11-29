import mongoose from "mongoose";
interface IUser {
    name: string;
    email: string;
    posts: mongoose.Types.ObjectId[];
}
export declare const UserModel: mongoose.Model<IUser, {}, {}, {}, mongoose.Document<unknown, {}, IUser, {}, mongoose.DefaultSchemaOptions> & IUser & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any, IUser>;
export {};
//# sourceMappingURL=userModel.d.ts.map