import express, {Application, Request, Response} from 'express';
import { corsHeaders } from './middlewares/cors.middleware';
import { studentsRouter } from './routes/students.router';
import { groupsRouter } from './routes/groups.router';



const app:Application=express();

app.use(express.urlencoded());

app.use(express.json());

app.use(corsHeaders);


app.use('/students', studentsRouter);
app.use('/groups', groupsRouter);

export {app};