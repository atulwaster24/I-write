import express from 'express';
import { verifyUser } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/login', verifyUser);

export default userRouter;