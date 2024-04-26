import mongoose from "mongoose";

export const commentSchema = new mongoose.Schema({
    postedBy: String,
    _id: mongoose.Types.ObjectId,
    comment: String,
    timestamp: Date
});

export const CommentModel = mongoose.model('Comment', commentSchema);