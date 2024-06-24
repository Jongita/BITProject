import express from 'express';
import { GroupsController } from '../controllers/groups.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const groupsRouter=express.Router();


groupsRouter.get("/", authMiddleware, GroupsController.getAllgroups);
groupsRouter.get("/:id", authMiddleware, GroupsController.getGroup);
groupsRouter.post("/", authMiddleware, GroupsController.insertGroup);
groupsRouter.put("/", authMiddleware, GroupsController.updateGroup);
groupsRouter.delete("/:id", authMiddleware, GroupsController.deleteGroup);

export {groupsRouter};