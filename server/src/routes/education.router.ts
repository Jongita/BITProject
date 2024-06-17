import express from 'express';
import { EducationController } from '../controllers/education.controller';

const educationRouter=express.Router();

educationRouter.get("/", EducationController.getAllStudents);
// educationRouter.get("/", EducationController.getAllgroups);
educationRouter.post("/", EducationController.insertStudent);

export {educationRouter};