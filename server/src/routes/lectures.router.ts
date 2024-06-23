import express from 'express';
import { LecturesController } from '../controllers/lectures.controller';

const lecturesRouter=express.Router();


lecturesRouter.get("/", LecturesController.getAlllectures);
lecturesRouter.post("/", LecturesController.insertLecture);

lecturesRouter.delete("/:id", LecturesController.deleteLecture);

export {lecturesRouter};