import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { StudentsService } from '../../../services/students.service';

@Component({
  selector: 'app-new-student',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './new-student.component.html',
  styleUrl: './new-student.component.css'
})
export class NewStudentComponent {

  constructor(private studentService:StudentsService){}

  public studentSubmit(form:NgForm){
    console.log(form.form.value);
    this.studentService.addStudent(form.form.value).subscribe((data)=>{
    })
  }
}
