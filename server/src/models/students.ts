import { RowDataPacket } from "mysql2";


export interface StudentGroups extends RowDataPacket{
  groupId:number;
  name:string
}


export interface Student extends RowDataPacket{
    id?:number;
    name:string;
    surname:string;
    email:string;
    password:string;
    type?:number;
    phone:string;

    groups:StudentGroups[];
   
}
