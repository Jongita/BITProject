import express from 'express';
import { GroupsController } from '../controllers/groups.controller';

const groupsRouter=express.Router();


groupsRouter.get("/", GroupsController.getAllgroups);
groupsRouter.get("/:id", GroupsController.getGroup);
groupsRouter.post("/", GroupsController.insertGroup);
groupsRouter.put("/", GroupsController.updateGroup);
groupsRouter.delete("/:id", GroupsController.deleteGroup);

export {groupsRouter};