import axios from 'axios';

const url = axios.create({baseURL: 'https://i-write-backend.onrender.com'});

export const fetchBlogs = () => url.get('/blogs');
export const fetchBlog = (id) => url.get(`blogs/${id}`);
export const addBlog = (blogData) => url.post('/blogs', blogData);
export const deleteBlog = (id) => url.delete(`/blogs/${id}`);
export const updateBlog = (id, updatedData) => url.patch(`/blogs/edit/${id}`, updatedData);