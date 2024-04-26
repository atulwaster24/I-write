import express from 'express';
import connectToDB from './src/config/mongoose.js';
import cors from 'cors';
import dotenv from 'dotenv';
import userRouter from './src/routes/userRouter.js';
import blogRouter from './src/routes/blogRouter.js';

dotenv.config();

const app = express();
app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(cors())
app.use('/user', userRouter);
app.use('/blogs', blogRouter);


const PORT = 5000;

app.listen(PORT, ()=>{
    console.log("Server started at PORT:", PORT);
    connectToDB();
})