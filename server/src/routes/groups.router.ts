import express from 'express';
import { GroupsController } from '../controllers/groups.controller';

const groupsRouter=express.Router();


groupsRouter.get("/", GroupsController.getAllgroups);


export {groupsRouter};