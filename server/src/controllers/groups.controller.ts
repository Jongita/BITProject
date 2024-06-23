import { pool } from "../db/connect";
import { Group } from "../models/groups";




export class GroupsController{
    static async getAllgroups(req:any, res:any){
        const sql="SELECT * FROM education.groups;";
        const [result]=await pool.query<Group[]>(sql);
        res.json(result);
     
    }

    static async insertGroup(req:any, res:any){
        const sql="INSERT INTO education.groups (name, course_id, lecturer_id, startdate, enddate) VALUES ( ?, ?, ?, ?, ?);";
        await pool.query(sql, [req.body.name, req.body.courseId, req.body.lecturerId, req.body.startdate, req.body.enddate]);
        res.status(201).json({
            "success":true
        })
    }

    static async deleteGroup(req:any, res:any){
        const sql="DELETE FROM education.groups WHERE id=?";
        await pool.query(sql, [req.params.id]);
        res.json({
            "success":true
        })
    }
}
