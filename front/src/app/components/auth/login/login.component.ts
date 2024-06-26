import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ErrorComponent } from '../../helper/error/error.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public isError = false;
  public errorText="";

  constructor (private authService:AuthService, private router:Router){

  }
  public onLogin(form:NgForm){
    this.authService.loginUser(form.form.value).subscribe({
      next: (data)=>{
        console.log(data);
        this.router.navigate(['/'])
      },
      error: (error)=>{
        console.log(error.error.text);
        this.isError=true;
        this.errorText=error.error.text

      }
    })
  }
}
