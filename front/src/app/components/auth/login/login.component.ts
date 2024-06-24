import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor (private authService:AuthService, private router:Router){

  }
  public onLogin(form:NgForm){
    this.authService.loginUser(form.form.value).subscribe({
      next: (data)=>{
        console.log(data);
        this.router.navigate(['/'])
      }
    })
  }
}
