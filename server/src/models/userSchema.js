import mongoose from "mongoose";
import { blogSchema } from "./blogSchema.js";

const userSchema = new mongoose.Schema({
    name: String,
    _id: String,
    image: String,
    email: String, 
});

export const UserModel = mongoose.model('User', userSchema);

