import mongoose from "mongoose";
import { commentSchema } from "./commentSchema.js";

export const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    timestamp: Date,
    createdBy: {type: Object},
    likes: [{type:mongoose.Types.ObjectId}],
    comments: {type: [commentSchema], default: []}
});


export const BlogModel = mongoose.model("Blog", blogSchema);