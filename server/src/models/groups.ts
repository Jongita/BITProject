import { RowDataPacket } from "mysql2";


export interface Group extends RowDataPacket{
    id?:number;
    name:string;
    course_id:number;
    lecturer_id:number;
    startdate:Date;
    enddate:Date
}