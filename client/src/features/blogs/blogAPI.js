import axios from 'axios';

const url = axios.create({baseURL: 'http://localhost:5000'});

export const fetchBlogs = () => url.get('/blogs');
export const fetchBlog = (id) => url.get(`/${id}`);
export const addBlog = (blogData) => url.post('/blogs', blogData);
export const deleteBlog = (id) => url.delete(`/blogs/${id}`);
export const updateBlog = (id, updatedData) => url.patch(`/blogs/edit/${id}`, updatedData);