import { RowDataPacket } from "mysql2";


export interface studentGroups extends RowDataPacket{
    id?:number;
    name:string;

}


export interface lectureAndFiles extends RowDataPacket{
    id?:number;
    lecture:string;
    date:Date;
    filename:string;
    file:string;
    groupId?:number;
}

