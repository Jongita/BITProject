import { Component } from '@angular/core';
import { Group } from '../../../models/group';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupsService } from '../../../services/groups.service';
import { ErrorService } from '../../../services/error.service';
import { StudentsService } from '../../../services/students.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-student',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-student.component.html',
  styleUrl: './update-student.component.css'
})
export class UpdateStudentComponent {
    public name:string="";
    public surname:string="";
    public email:string="";
    public password:string="";
    public id?:number;
    public phone?:string;

  
  constructor (private route:ActivatedRoute, private router:Router, private studentsService:StudentsService, private groupsService:GroupsService, private errorService:ErrorService){

    this.studentsService.getStudent(this.route.snapshot.params['id']).subscribe({
      next:(student)=>{
        console.log(student);
        this.name = student.name;
        this.surname = student.surname;
        this.email = student.email;
        this.password = "";
        this.id = student.id;
        this.phone = student.phone;
      }
    });
  }

  public studentSubmit(form:NgForm){
    console.log(form.form.value);
     this.studentsService.updateStudent({id:this.id, ...form.form.value}).subscribe({
      next:(data)=>{
        this.router.navigate(['students','list']);
      }
    })
      
  }

}
  

