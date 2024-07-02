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
import { userRouter } from './routes/user.router';
import { studentGroupsRouter } from './routes/studentGroup.router';
import { studentFilesRouter } from './routes/studentFiles.router';
import { groupStudentRouter } from './routes/groupStudent.router';





const app:Application=express();

app.use(express.urlencoded());

app.use(express.json());

app.use(corsHeaders);

app.use("/img", express.static(path.join("./img")));

app.use('/students', studentsRouter);
app.use('/lecturers', lecturersRouter);
app.use('/groups', groupsRouter);
app.use('/groupstudent', groupStudentRouter);
app.use('/courses', coursesRouter);
app.use('/lectures', lecturesRouter);
app.use('/files', filesRouter);
app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/studentInfo', studentGroupsRouter);
app.use('/studentFiles', studentFilesRouter);


export {app};