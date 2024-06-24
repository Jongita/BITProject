import { RowDataPacket } from "mysql2";


export interface Lecture extends RowDataPacket{
    id?:number;
    name:string;
    group_id:number;
    date:Date;
    description:string
}