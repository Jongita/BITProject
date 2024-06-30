import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../../../services/users.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../../models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  public profileForm:FormGroup;

  constructor (private userService:UsersService, private authService:AuthService, private router:Router){
    this.profileForm=new FormGroup({
      'name':new FormControl(null),
      'surname':new FormControl(null),
      'email':new FormControl(null),
      'password':new FormControl(null),
      'phone':new FormControl(null)
    });
  
    if (authService.user!=null && authService.user.id!=null){
      userService.getUser(authService.user.id).subscribe((user)=>{
          this.profileForm.setValue({
          name:user.name,
          surname:user.surname,
          email:user.email,
          password:"",
          phone:user.phone
        });
        this.profileForm.updateValueAndValidity();
      });
    }
  }

  public onSubmitForm(){
    const values=this.profileForm.value;
    console.log(values);
    this.userService.updateUser(new User(values.email, this.authService.user!.id, values.name, values.surname, values.password, values.phone )).subscribe((result)=>{
      this.router.navigate(["/"]);
    });

  }
}



