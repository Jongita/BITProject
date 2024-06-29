import express from 'express';
import { authMiddleware } from '../middlewares/auth.middleware';
import { StudentFilesController } from '../controllers/studentFiles.controller';

const studentFilesRouter=express.Router();

studentFilesRouter.get("/:id", authMiddleware, StudentFilesController.getLectureAndFiles);


export {studentFilesRouter};