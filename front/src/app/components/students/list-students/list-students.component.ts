import { Component } from '@angular/core';
import { StudentsService } from '../../../services/students.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Student } from '../../../models/student';
import { Group } from '../../../models/group';
import { GroupsService } from '../../../services/groups.service';

@Component({
  selector: 'app-list-students',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './list-students.component.html',
  styleUrl: './list-students.component.css'
})
export class ListStudentsComponent {
  public students:Student[]=[];
  public groups:Group[]=[];
  public group_id:number|null=null;
  public student_id:number|null=null;

  private loadStudents(){
  this.studentsService.getStudents().subscribe((data)=>{
    this.students=data;
    });
  }

  private loadGroups(){
  this.groupsService.getGroups().subscribe((data)=>{
    this.groups=data;
    console.log(data);
    });
  }

   constructor (private studentsService:StudentsService, private groupsService:GroupsService){
    this.loadStudents();
    this.loadGroups();
   }

   public deleteStudent(id:number){
    this.studentsService.deleteStudent(id).subscribe((data)=>{
      this.loadStudents();
    });

  }

  public assignStudentSubmit(form:NgForm){
    this.studentsService.addStudenttoGroup({...form.form.value}).subscribe({
      next:(data)=>{
        console.log(form.form.value);
        this.loadStudents();
        form.resetForm();
       
      }
  });
}

}


