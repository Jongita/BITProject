import { pool } from "../db/connect";
import { studentGroups } from "../models/studentGroup";





export class StudentGroupsController{
   static async getStudentGroups( req:any, res:any){
     console.log(req.params.id);
        const sql="SELECT g.name FROM education.group_student gs LEFT JOIN education.groups g ON gs.group_id=g.id WHERE gs.student_id=?";
        const [result]=await pool.query<studentGroups[]>(sql, [req.params.id]);
       if (result.length==0){
            res.status(404).json({
                'text': 'Pateiktas irasas nerastas'
            })
        } else{
            res.json(result);
        }

}
}