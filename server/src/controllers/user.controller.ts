import path from "path";
import { pool } from "../db/connect";
import { User } from "../models/user";
import bcrypt from "bcrypt";
import  fs from 'fs';

export class UserController{
    static async getAll(req:any, res:any){
        const [result]=await pool.query<User[]>("SELECT * FROM users");
        return res.json(result);

    }
    static async getUser(req:any, res:any){
      
        const userId=req.params.id;
      

        // if ( !(req.user.type==0 || userId==req.user.id)){
        //     res.status(400).json({
        //         text:"Jūs neturite teisės redaguoti įrašą"
        //     })
        // }
        
        const [result]=await pool.query<User[]>("SELECT * FROM users WHERE id=?",[userId]);
        if (result.length==0){
            res.status(404).json({
                text:"Vartotojas nerastas"
            });
        }else{
            res.json(result[0]);
        }
    }

}