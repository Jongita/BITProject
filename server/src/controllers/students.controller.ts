import { pool } from "../db/connect";
import { Student } from "../models/students";



export class StudentsController{
    static async getAllStudents( req:any, res:any){

        const sql="SELECT * FROM users WHERE type = 2";
        const [result]=await pool.query<Student[]>(sql);
        res.json(result);
    }

    static async getStudent( req:any, res:any){
    
        const sql="SELECT * FROM users WHERE id=?";
        const [result]=await pool.query<Student[]>(sql, [req.params.id]);
        if (result.length==0){
            res.status(404).json({
                'text': 'Pateiktas irasas nerastas'
            })
        } else{
            res.json(result[0]);
        }
       
    }

    static async insertStudent(req:any, res:any){
        const student:Student=req.body;

        const sql="INSERT INTO users (name, surname, email, password, type, phone) VALUES ( ?, ?, ?, ?, ?, ? )";
        const [result, fields]=await pool.query(sql, [student.name, student.surname, student.email, student.password, 2, student.phone]);
        const insertId=(result as any).insertId;
       
        student.groups.forEach(async (group)=>{
            const sql2="INSERT INTO group_student (group_id, student_id) VALUES (?, ?)";
            await pool.query(sql2, [group.groupId, insertId]);
        });
    }

       static async delete(req:any, res:any){
        const sql="DELETE FROM users WHERE id=?";
        await pool.query(sql, [req.params.id]);
        res.json({
            "success":true
        })
    }

}
    





        // const sql2="INSERT INTO group_student (group_id, student_id) VALUES (?, (SELECT id FROM users WHERE email = ?));";
        // await pool.query(sql2, [req.body.group, req.body.email]);
   