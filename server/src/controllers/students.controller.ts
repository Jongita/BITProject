import { pool } from "../db/connect";
import { Student } from "../models/students";



export class StudentsController{
    static async getAllStudents( req:any, res:any){
        const sql="SELECT * FROM users WHERE type = 2";
        const [result]=await pool.query<Student[]>(sql);
        res.json(result);
    }

    static async insertStudent(req:any, res:any){
        
        const sql="INSERT INTO users (name, surname, email, password, type, phone) VALUES ( ?, ?, ?, ?, ?, ? )";
        await pool.query(sql, [req.body.name, req.body.surname, req.body.email, req.body.password, 2, req.body.phone]);
 
        const sql2="INSERT INTO group_student (group_id, student_id) VALUES (?, (SELECT id FROM users WHERE email = ?));";
        await pool.query(sql2, [req.body.group, req.body.email]);
   
        res.json({
            "success":true
        })
    }
}


