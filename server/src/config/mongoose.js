import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config()

const url = process.env.MONGODB_URL;

const connectToDB = async () =>{
    try {
        await mongoose.connect(url)
        console.log("Connected to Database");
    } catch (error) {
        console.log(error);
    }
};

export default connectToDB;