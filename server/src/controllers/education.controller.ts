import { pool } from "../db/connect";
import { Student } from "../models/students";



export class EducationController{
    static async getAllStudents( req:any, res:any){
        const sql="SELECT * FROM Users WHERE type = 2";
        const [result]=await pool.query<Student[]>(sql);
        res.json(result);
    }
}