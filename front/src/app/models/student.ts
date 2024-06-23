export class Student {

    constructor(

    public name:string,
    public surname:string,
    public email:string,
    public password:string,
    public id?:number,
    public type?:number,
    public phone?:string,
    public assignedGroups?:{
    groupId:number
  }
  
    ){}
   
}
