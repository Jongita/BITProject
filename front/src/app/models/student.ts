export class Student {

    constructor(

    public name:string,
    public surname:string,
    public email:string,
    public password:string,
    public id?:number,
    public type?:number,
    public phone?:string,
    public group_id?:number,
    public student_id?:number,
    public groups?:{
    groupId:number,
    name:string
  }[]
  
  ){}
   
}


// assignedGroups