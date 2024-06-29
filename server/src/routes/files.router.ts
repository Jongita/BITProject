import express from 'express';
import { authMiddleware } from '../middlewares/auth.middleware';
import { FilesController } from '../controllers/files.controller';
import multer from 'multer';

const filesRouter=express.Router();


filesRouter.get("/", authMiddleware, FilesController.getAllFiles);
filesRouter.get("/:id", authMiddleware, FilesController.getFile);
filesRouter.put("/", authMiddleware, FilesController.updateFile);
filesRouter.delete("/:id", authMiddleware, FilesController.deleteFile);

const storageFiles=multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, './img')
    },
    filename: (req, file, cb)=>{
        const userId=req.params.id;
        const fileName="p_"+userId+"_"+Date.now()+".jpg";
       
        cb(null, fileName)
    }
})
filesRouter.post("/:id", authMiddleware, multer({storage:storageFiles}).single('file'), FilesController.insertFile);

export {filesRouter};

