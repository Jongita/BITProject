import { pool } from "../db/connect";
import { Lecture } from "../models/lecture";


export class LecturesController{
    static async getAlllectures(req:any, res:any){
        const sql="SELECT * FROM education.lectures;";
        const [result]=await pool.query<Lecture[]>(sql);
        res.json(result);
        console.log(result);
     
    }

    static async getLecture( req:any, res:any){
        console.log(req.params.id);
        const sql="SELECT * FROM education.lectures WHERE id=?";
        const [result]=await pool.query<Lecture[]>(sql, [req.params.id]);
         if (result.length==0){
            res.status(404).json({
                'text': 'Pateiktas irasas nerastas'
            })
        } else{
            res.json(result[0]);
        }
    }

    static async insertLecture(req:any, res:any){
        const sql="INSERT INTO education.lectures (name, group_id, date, description) VALUES ( ?, ?, ?, ?);";
        await pool.query(sql, [req.body.name, req.body.group_id, req.body.date, req.body.description]);
        res.status(201).json({
            "success":true
        })
    }

    static async updateLecture(req:any, res:any){
        const sql="UPDATE education.lectures SET name=?, group_id=?, date=?, description=? WHERE id=?;";
        try{
            await pool.query(sql, [req.body.name, req.body.group_id, req.body.date, req.body.description, req.body.id]);
        res.json({
                "success":true
            });
        }catch(error){
            res.status(500).json({
                'text':'Įvyko atnaujinimo klaida'
            });
        }
    }

    static async deleteLecture(req:any, res:any){
        const sql="DELETE FROM education.lectures WHERE id=?";
        await pool.query(sql, [req.params.id]);
        res.json({
            "success":true
        })
    }
}
