import { pool } from "../db/connect";
import { Lecture } from "../models/lecture";


export class LecturesController{
    static async getAlllectures(req:any, res:any){
        const sql="SELECT * FROM education.lectures;";
        const [result]=await pool.query<Lecture[]>(sql);
        res.json(result);
     
    }

    static async insertLecture(req:any, res:any){
        const sql="INSERT INTO education.lectures (name, group_id, date, description) VALUES ( ?, ?, ?, ?);";
        await pool.query(sql, [req.body.name, req.body.groupId, req.body.date, req.body.description]);
        res.status(201).json({
            "success":true
        })
    }

    static async deleteLecture(req:any, res:any){
        const sql="DELETE FROM education.lectures WHERE id=?";
        await pool.query(sql, [req.params.id]);
        res.json({
            "success":true
        })
    }
}
