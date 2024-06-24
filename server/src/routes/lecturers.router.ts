import express from 'express';
import { LecturersController } from '../controllers/lecturers.controller';


const lecturersRouter=express.Router();

lecturersRouter.get("/", LecturersController.getAllLecturers);



export {lecturersRouter};