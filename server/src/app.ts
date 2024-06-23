import express, {Application, Request, Response} from 'express';
import { corsHeaders } from './middlewares/cors.middleware';
import { studentsRouter } from './routes/students.router';
import { groupsRouter } from './routes/groups.router';
import { coursesRouter } from './routes/courses.router';
import { lecturesRouter } from './routes/lectures.router';



const app:Application=express();

app.use(express.urlencoded());

app.use(express.json());

app.use(corsHeaders);


app.use('/students', studentsRouter);
app.use('/groups', groupsRouter);
app.use('/courses', coursesRouter);
app.use('/lectures', lecturesRouter);

export {app};