import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { StudentsService } from '../../../services/students.service';
import { Group } from '../../../models/group';
import { Student } from '../../../models/student';
import { GroupsService } from '../../../services/groups.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-student',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './new-student.component.html',
  styleUrl: './new-student.component.css'
})
export class NewStudentComponent {
  public students:Student[]=[];
  public groups:Group[]=[];

  public groupId:number|null=null;

  public assignedGroups:{
    groupId:number,
  }[]=[];


  private loadStudents(){
  this.studentService.getStudents().subscribe((data)=>{
    this.students=data;
    });
  }

  private loadGroups(){
  this.groupService.getGroups().subscribe((data)=>{
    this.groups=data;
    });
  }

  constructor(private studentService:StudentsService, private groupService:GroupsService, private router:Router){
    this.loadStudents();
    this.loadGroups();
  }

  public addStudentToGroup(){
    if (this.groupId!=null){
      this.assignedGroups.push({
        groupId:this.groupId
      });
      console.log(this.assignedGroups);
    }
  }

  
  public studentSubmit(form:NgForm){
    this.studentService.addStudent({...form.form.value, groups:this.assignedGroups}).subscribe({
      next:(result)=>{
        this.router.navigate(['students','list']);
      }
    })
}

public getGroupName(id:number){
    let result="";
    this.groups.forEach((group)=>{ 
      if (group.id==id) 
        result= group.name;
    });
    return result;
  }




}