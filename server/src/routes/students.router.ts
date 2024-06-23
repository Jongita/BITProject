import express from 'express';
import { StudentsController } from '../controllers/students.controller';

const studentsRouter=express.Router();

studentsRouter.get("/", StudentsController.getAllStudents);
studentsRouter.get("/:id", StudentsController.getStudent);
studentsRouter.post("/", StudentsController.insertStudent);

studentsRouter.delete("/:id", StudentsController.delete);


export {studentsRouter};