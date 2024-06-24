import express from 'express';
import { LecturesController } from '../controllers/lectures.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const lecturesRouter=express.Router();


lecturesRouter.get("/", authMiddleware, LecturesController.getAlllectures);
lecturesRouter.get("/:id", authMiddleware, LecturesController.getLecture);
lecturesRouter.post("/", authMiddleware, LecturesController.insertLecture);
lecturesRouter.put("/", authMiddleware, LecturesController.updateLecture);
lecturesRouter.delete("/:id", authMiddleware, LecturesController.deleteLecture);

export {lecturesRouter};