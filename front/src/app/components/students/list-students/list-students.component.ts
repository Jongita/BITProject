import { Component } from '@angular/core';
import { StudentsService } from '../../../services/students.service';
import { Student } from '../../../models/student';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-students',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-students.component.html',
  styleUrl: './list-students.component.css'
})
export class ListStudentsComponent {
  public students:Student[]=[];

    private loadStudents(){
    this.studentsService.getStudents().subscribe((data)=>{
      this.students=data;
    });
  }

   constructor (private studentsService:StudentsService){
    this.loadStudents();
   }
}
