import { pool } from "../db/connect";
import { User } from "../models/user";
import bcrypt from "bcrypt";


export class UserController{
    static async getAll(req:any, res:any){
        const [result]=await pool.query<User[]>("SELECT * FROM users WHERE type = 2");
        return res.json(result);
        console.log(result);
    }
    static async getUser(req:any, res:any){
        console.log(req.params.id);
        const userId=req.params.id;
        
        if ( !(req.user.type==2 || userId==req.user.id)){
            res.status(400).json({
                text:"Jūs neturite teisės redaguoti įrašą"
            })
        }    
        const [result]=await pool.query<User[]>("SELECT * FROM users WHERE id=?",[userId]);
        if (result.length==0){
            res.status(404).json({
                text:"Vartotojas nerastas"
            });
        }else{
            res.json(result[0]);
            console.log(result[0]);
        }
    }

    static async update(req:any, res:any){  
        const userId=req.params.id;

         if (req.body.password!=''){
            const passwordHash=await bcrypt.hash(req.body.password, 12);

            await pool.query("UPDATE education.users SET name=?, surname=?, email=?, password=?, type=?, phone=? WHERE id=?;",[
                req.body.name,
                req.body.surname,
                req.body.email,
                passwordHash,
                '2',
                req.body.phone,
                userId
            ]);
        }else{
            await pool.query("UPDATE education.users SET name=?, surname=?, email=?, type=?, phone=? WHERE id=?;",[
                req.body.name,
                req.body.surname,
                req.body.email,
                '2',
                req.body.phone,
                userId
            ]);
        }
        res.json({
            success:true
        });
        }
}


