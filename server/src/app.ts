import express, {Application, Request, Response} from 'express';
import { corsHeaders } from './middlewares/cors.middleware';
import { educationRouter } from './routes/education.router';


const app:Application=express();

app.use(express.urlencoded());

app.use(express.json());

app.use(corsHeaders);


app.use('/students', educationRouter);

export {app};