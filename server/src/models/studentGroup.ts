import { RowDataPacket } from "mysql2";


export interface studentGroups extends RowDataPacket{
    id?:number;
    name:string;

}