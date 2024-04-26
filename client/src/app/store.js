import { configureStore } from '@reduxjs/toolkit';
import blogReducer from '../features/blogs/blogSlice';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    user: userReducer
  },
});
