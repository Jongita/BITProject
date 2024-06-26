import express from 'express';
import { authMiddleware } from '../middlewares/auth.middleware';
import { UserController } from '../controllers/user.controller';

const userRouter=express.Router();


userRouter.get("/", authMiddleware, UserController.getAll);
userRouter.get("/:id", authMiddleware, UserController.getUser);


export {userRouter}