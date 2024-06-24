import { pool } from "../db/connect";
import { Lecturer } from "../models/lecturer";


export class LecturersController{
    static async getAllLecturers( req:any, res:any){

        const sql="SELECT * FROM users WHERE type = 1";
        const [result]=await pool.query<Lecturer[]>(sql);
        res.json(result);
    }
}