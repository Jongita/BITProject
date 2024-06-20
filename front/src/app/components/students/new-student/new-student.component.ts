import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { StudentsService } from '../../../services/students.service';
import { Group } from '../../../models/group';

@Component({
  selector: 'app-new-student',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './new-student.component.html',
  styleUrl: './new-student.component.css'
})
export class NewStudentComponent {
  public groups:Group[]=[];
  public selectedGroup: String | null = null;

  private loadGroups(){
  this.studentService.getGroups().subscribe((data)=>{
    this.groups=data;
    });
  }

  constructor(private studentService:StudentsService){
    this.loadGroups();
  }
  
  public studentSubmit(form:NgForm){
    console.log(form.form.value);
    console.log(form.form.value.email);
    console.log(form.form.value.group.course_id);

    this.studentService.addStudent(form.form.value).subscribe((data)=>{
    })
  }
}
