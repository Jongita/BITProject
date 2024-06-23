import { RowDataPacket } from "mysql2";


export interface Group extends RowDataPacket{
    id?:number;
    name:string;
    courseId:number;
    lecturerId:number;
    startdate:Date;
    enddate:Date
}