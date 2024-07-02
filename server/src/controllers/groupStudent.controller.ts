import { pool } from "../db/connect";


export class groupStudentsController{
    static async insertStudentToGroup(req:any, res:any){
        const sql="INSERT INTO group_student (group_id, student_id) VALUES (?, ?);"
        await pool.query(sql, [req.body.group_id, req.body.student_id]);
        res.status(201).json({
            "success":true
        })
    }

    static async deletegroupFromStudent(req:any, res:any){
        let sql="DELETE FROM group_student WHERE group_id=? AND student_id=?";
        await pool.query(sql, [req.body.group_id, req.body.student_id]);
        res.json({
            "success":true
        })
    }


}