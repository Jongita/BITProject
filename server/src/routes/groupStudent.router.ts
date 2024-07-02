import express from 'express';
import { authMiddleware } from '../middlewares/auth.middleware';
import { groupStudentsController } from '../controllers/groupStudent.controller';

const groupStudentRouter=express.Router();

groupStudentRouter.post("/", groupStudentsController.insertStudentToGroup);
groupStudentRouter.delete("/", authMiddleware, groupStudentsController.deletegroupFromStudent);


export {groupStudentRouter};