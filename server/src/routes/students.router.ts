import express from 'express';
import { StudentsController } from '../controllers/students.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const studentsRouter=express.Router();

studentsRouter.get("/", authMiddleware, StudentsController.getAllStudents);
studentsRouter.get("/:id", authMiddleware, StudentsController.getStudent);
studentsRouter.post("/", authMiddleware, StudentsController.insertStudent);
studentsRouter.put("/", authMiddleware, StudentsController.updateStudent);
studentsRouter.delete("/:id", authMiddleware, StudentsController.delete);


export {studentsRouter};