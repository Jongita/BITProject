import express from 'express';
import { CoursesController } from '../controllers/courses.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const coursesRouter=express.Router();


coursesRouter.get("/", authMiddleware, CoursesController.getAllcourses);
coursesRouter.get("/:id", authMiddleware, CoursesController.getCourse);
coursesRouter.post("/", authMiddleware, CoursesController.insertCourse);
coursesRouter.put("/", authMiddleware, CoursesController.updateCourse);
coursesRouter.delete("/:id", authMiddleware, CoursesController.deleteCourse);

export {coursesRouter};