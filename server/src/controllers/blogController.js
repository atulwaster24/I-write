import {BlogModel} from '../models/blogSchema.js'
import {UserModel} from "../models/userSchema.js"

export const fetchBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.find();
        if(blogs){
            res.status(200).json({result: blogs});
        }else{
            res.status(404).json({result: "No blogs found."})
        }
    } catch (error) {
        res.status(500).json({message: "Something went wrong."})
    }
};


export const fetchBlog = async (req, res) =>{
    const {id: _id} = req.params;

    try {
        const blog = await BlogModel.findById(_id);
        if(blog){
            res.status(200).json({result: blog});
        }else{
            res.status(404).json({result: "Blog not found."})
        }
    } catch (error) {
        res.status(500).json({message: "Something went wrong."})
    }
};

export const addBlog = async (req, res) =>{
    const {title, content, createdBy} = req.body;
    try {
        const user = await UserModel.findById(createdBy);

        const newBlog = new BlogModel({
            title, content, createdBy: user, timestamp: new Date()
        });
        const savedBlog = await newBlog.save();

        res.status(201).json({result: savedBlog});
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Something went wrong."})
    }
};

export const deleteBlog = async (req, res) => {
    const {blogId} = req.params;
    try {
        let deletedBlog = await BlogModel.findByIdAndDelete(blogId);
        if(deletedBlog){
            res.status(200).json({id: blogId})
        }
    } catch (error) {
        res.status(500).json({message: "Something went wrong"});
    }
};

export const updateBlog = async (req, res) =>{
    const {blogId} = req.params;
    const blogData = req.body;

    try {
        let updatedBlog = await BlogModel.findByIdAndUpdate(blogId, blogData, {new: true});
        return res.status(200).json({update: updatedBlog});
    } catch (error) {
        res.status(500).json({message: error});
    }
}