import { pool } from "../db/connect";
import { Student, StudentGroups } from "../models/students";
import bcrypt from "bcrypt";



export class StudentsController{
    static async getAllStudents( req:any, res:any){

        const sql="SELECT * FROM users WHERE type = 2";
        const [result]=await pool.query<Student[]>(sql);

        for (let i=0; i<result.length; i++){
            // paprastesnis budas
            // const sql2="SELECT product_id as productId, count FROM orders_products WHERE order_id=?";
            // geresnis budas
            const sql2="SELECT gs.group_id as groupId, g.name FROM education.group_student gs LEFT JOIN education.groups g ON gs.group_id=g.id WHERE student_id=?";   
            const [groups]=await pool.query<StudentGroups[]>(sql2, [result[i].id]);
            result[i].groups=groups;
            console.log(groups);
       };
       
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
        let password=student.password;
        password=await bcrypt.hash(password, 12)


        const sql="INSERT INTO users (name, surname, email, password, type, phone) VALUES ( ?, ?, ?, ?, ?, ? )";
        const [result, fields]=await pool.query(sql, [student.name, student.surname, student.email, password, 2, student.phone]);
        const insertId=(result as any).insertId;
       
        student.groups.forEach(async (group)=>{
            const sql2="INSERT INTO group_student (group_id, student_id) VALUES (?, ?)";
            await pool.query(sql2, [group.groupId, insertId]);
        });
        res.status(201).json({
            "success":true
        })
    }

       static async delete(req:any, res:any){
        let sql="DELETE FROM group_student WHERE student_id=?";
        await pool.query(sql, [req.params.id]);

        sql="DELETE FROM users WHERE id=?";
        await pool.query(sql, [req.params.id]);
        res.json({
            "success":true
        })
    }

}
    


        // const sql2="INSERT INTO group_student (group_id, student_id) VALUES (?, (SELECT id FROM users WHERE email = ?));";
        // await pool.query(sql2, [req.body.group, req.body.email]);
   