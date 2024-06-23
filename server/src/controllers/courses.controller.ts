import { pool } from "../db/connect";
import { Course } from "../models/course";


export class CoursesController{
    static async getAllcourses(req:any, res:any){
        const sql="SELECT * FROM education.courses;";
        const [result]=await pool.query<Course[]>(sql);
        res.json(result);
     
    }

    
}
