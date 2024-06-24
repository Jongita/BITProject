import { RowDataPacket } from "mysql2";


export interface File extends RowDataPacket{
    id?:number;
    lecture_id:number;
    name:string;
    file:string;
    visibility:string;
}