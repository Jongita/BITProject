import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user:User|null=null;
  public onLoginStatusChange=new EventEmitter<boolean>

  constructor(private http:HttpClient) {
    const user=localStorage.getItem("user")
    if (user!=null){
      this.user=JSON.parse(user);
    }

   }

  public registerUser(user:User){
    console.log(user);
    return this.http.post("http://localhost:5999/auth/signin", user);
  }

  public loginUser(user:User){
    return this.http.post<User>("http://localhost:5999/auth/login", user).pipe(tap((response)=>{
      this.user=response;
      localStorage.setItem("user", JSON.stringify(this.user))
      this.onLoginStatusChange.emit(true)
    }))
  }

  public logOut(){
    this.user=null;
    localStorage.removeItem("user")
    this.onLoginStatusChange.emit(false)
  }

  public isLoggedin(){
    return (this.user!=null && this.user.token!=null);
  }

  
}
