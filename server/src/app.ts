import express, {Application, Request, Response} from 'express';
import { corsHeaders } from './middlewares/cors.middleware';
import { studentsRouter } from './routes/students.router';
import { groupsRouter } from './routes/groups.router';
import { coursesRouter } from './routes/courses.router';
import { lecturesRouter } from './routes/lectures.router';
import { lecturersRouter } from './routes/lecturers.router';
import { authRouter } from './routes/auth.router';
import { filesRouter } from './routes/files.router';
import path from 'path';



const app:Application=express();

app.use(express.urlencoded());

app.use(express.json());

app.use(corsHeaders);

app.use("/img", express.static(path.join("./img")));

app.use('/students', studentsRouter);
app.use('/lecturers', lecturersRouter);
app.use('/groups', groupsRouter);
app.use('/courses', coursesRouter);
app.use('/lectures', lecturesRouter);
app.use('/files', filesRouter);
app.use('/auth', authRouter);


export {app};