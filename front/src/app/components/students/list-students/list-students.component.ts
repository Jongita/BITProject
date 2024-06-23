import { Component } from '@angular/core';
import { StudentsService } from '../../../services/students.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Group } from '../../../models/group';
import { GroupsService } from '../../../services/groups.service';
import { RouterLink } from '@angular/router';
import { Student } from '../../../models/student';

@Component({
  selector: 'app-list-students',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
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

   public deleteStudent(id:number){
    this.studentsService.deleteStudent(id).subscribe((data)=>{
      this.loadStudents();
    });

  }

}
