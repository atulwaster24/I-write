import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as userAPI from './userAPI';

const initialState = {
    user: null
};

export const verifyUserAsync = createAsyncThunk(
    'user/verifyUser',
    async (data) => {
        const user = await userAPI.verifyUser(data);
        return user.data;
    }
);

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) =>{
        builder
        .addCase(verifyUserAsync.fulfilled, (state, action)=>{
            state.user = action.payload.user;
        })
    }
});

export default userSlice.reducer;