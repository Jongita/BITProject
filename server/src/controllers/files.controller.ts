import { pool } from "../db/connect";
import { File } from "../models/file";


export class FilesController{
    static async getAllFiles(req:any, res:any){
        const sql="SELECT * FROM education.files;";
        const [result]=await pool.query<File[]>(sql);
        res.json(result);
     
    }

    static async getFile( req:any, res:any){
        console.log(req.params.id);
        const sql="SELECT * FROM education.files WHERE id=?";
        const [result]=await pool.query<File[]>(sql, [req.params.id]);
         if (result.length==0){
            res.status(404).json({
                'text': 'Pateiktas irasas nerastas'
            })
        } else{
            res.json(result[0]);
        }
    }

    static async insertFile(req:any, res:any){
        const url=req.protocol+"://"+req.get("host")+"/img/"+req.file.filename ;
        const sql="INSERT INTO education.files (lecture_id, name, file, visibility) VALUES ( ?, ?, ?, ?);";
        await pool.query(sql, [req.body.lecture_id, req.body.name, url, req.body.file, req.body.visibility]);
        res.status(201).json({
            "success":true
        })
    }

    static async updateFile(req:any, res:any){
        

        const sql="UPDATE education.files SET lecture_id=?, name=?, file=?, visibility=? WHERE id=?;";
        try{
            await pool.query(sql, [req.body.lecture_id, req.body.name, req.body.visibility, req.body.id]);
        res.json({
                "success":true
            });
        }catch(error){
            res.status(500).json({
                'text':'Įvyko atnaujinimo klaida'
            });
        }
    }

    static async deleteFile(req:any, res:any){
        const sql="DELETE FROM education.files WHERE id=?";
        await pool.query(sql, [req.params.id]);
        res.json({
            "success":true
        })
    }
}
