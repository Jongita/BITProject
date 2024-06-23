import express from 'express';
import { CoursesController } from '../controllers/courses.controller';

const coursesRouter=express.Router();


coursesRouter.get("/", CoursesController.getAllcourses);


export {coursesRouter};