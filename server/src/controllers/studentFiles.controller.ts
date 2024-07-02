import { pool } from "../db/connect";
import { lectureAndFiles } from "../models/studentGroup";

export class StudentFilesController{

static async getLectureAndFiles( req:any, res:any){
    //  const sql="SELECT l.name AS lecture, l.date, f.name AS fileName, f.file FROM education.lectures l LEFT JOIN education.files f ON f.lecture_id=l.id AND f.visibility=1 WHERE l.group_id=?";
     const sql="SELECT l.name AS lecture, DATE_FORMAT(l.date, '%Y-%m-%d') AS date, f.name AS fileName, f.file FROM education.lectures l LEFT JOIN education.files f ON f.lecture_id=l.id AND f.visibility=1 WHERE l.group_id=?";
        const [result]=await pool.query<lectureAndFiles[]>(sql, [req.params.id]);
        if (result.length==0){
            res.status(404).json({
                'text': 'Pateiktas irasas nerastas'
            })
        } else{
            res.json(result);
            console.log(result);
        }
       
    }
}

