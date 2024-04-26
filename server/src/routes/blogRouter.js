import express from 'express';
import { addBlog, deleteBlog, fetchBlog, fetchBlogs, updateBlog } from '../controllers/blogController.js';

const blogRouter = express.Router();

blogRouter.get('/', fetchBlogs);
blogRouter.get('/:id', fetchBlog);
blogRouter.post('/', addBlog);
blogRouter.delete('/:blogId', deleteBlog)
blogRouter.patch('/edit/:blogId', updateBlog);

export default blogRouter;