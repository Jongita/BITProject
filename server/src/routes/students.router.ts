import express from 'express';
import { StudentsController } from '../controllers/students.controller';

const studentsRouter=express.Router();

studentsRouter.get("/", StudentsController.getAllStudents);
studentsRouter.post("/", StudentsController.insertStudent);

export {studentsRouter};