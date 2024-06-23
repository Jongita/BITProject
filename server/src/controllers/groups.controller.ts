import { pool } from "../db/connect";
import { Group } from "../models/groups";

export class GroupsController{
    static async getAllgroups(req:any, res:any){
        const sql="SELECT * FROM education.groups;";
        const [result]=await pool.query<Group[]>(sql);
        res.json(result);
     
    }

    static async getGroup( req:any, res:any){
        console.log(req.params.id);
        const sql="SELECT * FROM education.groups WHERE id=?";
        const [result]=await pool.query<Group[]>(sql, [req.params.id]);
        res.json(result[0]);
    }


    static async insertGroup(req:any, res:any){
        const sql="INSERT INTO education.groups (name, course_id, lecturer_id, startdate, enddate) VALUES ( ?, ?, ?, ?, ?);";
        await pool.query(sql, [req.body.name, req.body.course_id, req.body.lecturer_id, req.body.startdate, req.body.enddate]);
        res.status(201).json({
            "success":true
        })
    }

    static async updateGroup(req:any, res:any){
        const sql="UPDATE education.groups SET name=?, course_id=?, lecturer_id=?, startdate=?, enddate=? WHERE id=?;";
        await pool.query(sql, [req.body.name, req.body.course_id, req.body.lecturer_id, req.body.startdate, req.body.enddate, req.body.id]);
        res.json({
                "success":true
            });
    }

    static async deleteGroup(req:any, res:any){
        const sql="DELETE FROM education.groups WHERE id=?";
        await pool.query(sql, [req.params.id]);
        res.json({
            "success":true
        })
    }
}

// UPDATE education.groups SET name='PHP 2018.01', course_id='3', lecturer_id='2', startdate='2024-06-10', enddate='2024-06-25' WHERE id=1;