import express from 'express';
import { StudentsController } from '../controllers/students.controller';
import { authMiddleware } from '../middlewares/auth.middleware';
import { StudentGroupsController } from '../controllers/studentGroup.controller';

const studentGroupsRouter=express.Router();

studentGroupsRouter.get("/:id", authMiddleware, StudentGroupsController.getStudentGroups);


export {studentGroupsRouter};