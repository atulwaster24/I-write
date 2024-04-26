import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as BlogAPI from './blogAPI';


const initialState = {
    blogs: [],
    loading: true,
};

export const fetchBlogsAsync = createAsyncThunk(
    'blogs/fetchBlogs',
    async () => {
        const blogs = await BlogAPI.fetchBlogs();
        return blogs.data;
    }
);

export const deleteBlogAsync = createAsyncThunk(
    'blogs/delete',
    async (id) =>{
        const blogs = await BlogAPI.deleteBlog(id);
        return blogs.data;
    }
);

export const updateBlogAsync = createAsyncThunk(
    "blogs/update",
    async (data) =>{
        console.log(data)
        const update = await BlogAPI.updateBlog(data.id, data.data);
        return update.data;
    }
)


export const addBlogAsync = createAsyncThunk(
    "blogs/addBlog",
    async (blogData)=>{
        const blog = await BlogAPI.addBlog(blogData);
        return blog.data;
    }
)


export const blogSlice = createSlice({
    name: "blog",
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchBlogsAsync.pending, (state)=>{
        })
        .addCase(fetchBlogsAsync.fulfilled, (state, action) => {
            state.blogs = [...action.payload.result];
            state.loading = false;
        })
        .addCase(addBlogAsync.pending, (state)=> {
            state.loading = true;
        })
        .addCase(addBlogAsync.fulfilled, (state, action)=>{
            state.blogs = [...state.blogs, action.payload];
            state.loading = false;
            fetchBlogsAsync();
        })
        .addCase(deleteBlogAsync.fulfilled, (state, action)=>{
            state.blogs = state.blogs.filter((blog)=> blog._id !== action.payload.id)
        })
        .addCase(updateBlogAsync.pending, (state)=>{
            state.loading = true;
        })
        .addCase(updateBlogAsync.fulfilled, (state, action)=>{
            fetchBlogsAsync();  
        })
    }
});

export const selectBlogState = (state) => state.blog;

export default blogSlice.reducer;