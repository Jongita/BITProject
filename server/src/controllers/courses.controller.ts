import { pool } from "../db/connect";
import { Course } from "../models/course";


export class CoursesController{
    static async getAllcourses(req:any, res:any){
        const sql="SELECT * FROM education.courses;";
        const [result]=await pool.query<Course[]>(sql);
        res.json(result);
     
    }
    static async getCourse( req:any, res:any){
        console.log(req.params.id);
        const sql="SELECT * FROM education.courses WHERE id=?";
        const [result]=await pool.query<Course[]>(sql, [req.params.id]);
         if (result.length==0){
            res.status(404).json({
                'text': 'Pateiktas irasas nerastas'
            })
        } else{
            res.json(result[0]);
        }
    }

    static async insertCourse(req:any, res:any){
        const sql="INSERT INTO education.courses (name) VALUES (?);";
        await pool.query(sql, [req.body.name]);
        res.status(201).json({
            "success":true
        })
    }

    static async updateCourse(req:any, res:any){
        const sql="UPDATE education.courses SET name=? WHERE id=?;";
        try{
            await pool.query(sql, [req.body.name, req.body.id]);
        res.json({
                "success":true
            });
        }catch(error){
            res.status(500).json({
                'text':'Įvyko atnaujinimo klaida'
            });
        }
    }

    static async deleteCourse(req:any, res:any){
        const sql="DELETE FROM education.courses WHERE id=?";
        await pool.query(sql, [req.params.id]);
        res.json({
            "success":true
        })
    }
}