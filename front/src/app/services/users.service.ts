import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  public getUsers(){
    return this.http.get<User[]>('http://localhost:5999/users/').pipe(map((users)=>{
      const usersO:User[]=[];
      users.forEach((user)=>{
        usersO.push( new User(user.email, user.id, user.name, user.surname, user.password, user.type, user.phone, user.token));
      });
      return usersO;
     
    }));
   
  }

  // public getUser(id:number){
  //   return this.http.get<User>('http://localhost:5999/users/'+id).pipe(
  //     map(
  //       (user)=>{
  //         return new User(user.email, user.id, user.name, user.surname, user.password, user.type, user.phone, user.token);
  //       })
  //     );
  //   }

    public getUser(id:number){
    return this.http.get<User>('http://localhost:5999/users/'+id);
    }
  
    public updateUser(user:User){
    return this.http.put('http://localhost:5999/users/'+user.id, user);
  }

}

