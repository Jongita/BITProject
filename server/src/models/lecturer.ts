import { RowDataPacket } from "mysql2";


export interface Lecturer extends RowDataPacket{
    id?:number;
    name:string;
    surname:string;
    email:string;
    password:string;
    type?:number;
    phone:string;
   
}