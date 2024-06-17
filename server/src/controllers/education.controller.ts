import { pool } from "../db/connect";
import { Student } from "../models/students";



export class EducationController{
    static async getAllStudents( req:any, res:any){
        const sql="SELECT * FROM Users WHERE type = 2";
        const [result]=await pool.query<Student[]>(sql);
        res.json(result);
    }

    // static async getAllgroups( req:any, res:any){
    //     const sql="SELECT id, name FROM groups";
    //     const [result]=await pool.query(sql);
    //     res.json(result);
    // }

    static async insertStudent(req:any, res:any){
        const sql="INSERT INTO users (name, surname, email, password, type, phone) VALUES ( ?, ?, ?, ?, ?, ? )";
        await pool.query(sql, [req.body.name, req.body.surname, req.body.email, req.body.password, 2, req.body.phone]);
        res.json({
            "success":true
        })
    }
}
