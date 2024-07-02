import express from 'express';
import { StudentsController } from '../controllers/students.controller';
import { authMiddleware } from '../middlewares/auth.middleware';
import { groupStudentsController } from '../controllers/groupStudent.controller';

const groupStudentRouter=express.Router();

groupStudentRouter.post("/", groupStudentsController.insertStudentToGroup);

export {groupStudentRouter};