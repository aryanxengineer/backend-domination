import { Schema } from "mongoose";
interface IPost {
    title: string;
    content: string;
    userId: Schema.Types.ObjectId;
}
export declare const PostModel: import("mongoose").Model<IPost, {}, {}, {}, import("mongoose").Document<unknown, {}, IPost, {}, import("mongoose").DefaultSchemaOptions> & IPost & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any, IPost>;
export {};
//# sourceMappingURL=postModel.d.ts.map