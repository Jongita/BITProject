import { RowDataPacket } from "mysql2";


export interface Lecture extends RowDataPacket{
    id?:number;
    name:string;
    groupId:number;
    date:Date;
    description:string
}