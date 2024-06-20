import { pool } from "../db/connect";
import { Group } from "../models/groups";




export class GroupsController{
    static async getAllgroups(req:any, res:any){
        const sql="SELECT * FROM education.groups;";
        const [result]=await pool.query<Group[]>(sql);
        res.json(result);
     
    }
}
