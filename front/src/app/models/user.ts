export class User{
   
    constructor(
    public email:string,
    public id?:number,
    public name?:string,
    public surname?:string,
    public password?:string,
    public type?:number,
    public token?:string,
    public phone?:string
    ){}
}