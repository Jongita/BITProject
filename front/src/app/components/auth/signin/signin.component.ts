import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ErrorService } from '../../../services/error.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

    constructor (private authService:AuthService, private errorService:ErrorService){

  }

  public onRegister(f:NgForm){
    console.log(f.form.value);
    this.authService.registerUser(f.form.value).subscribe({
      next:(data)=>{
        console.log(data);
      },
      error:(error)=>{
        this.errorService.errorEmitter.emit(error.error.text);
    }
  })
}
}