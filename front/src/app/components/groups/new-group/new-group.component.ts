import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { GroupsService } from '../../../services/groups.service';
import { Router } from '@angular/router';
import { CoursesService } from '../../../services/courses.service';
import { Course } from '../../../models/course';

@Component({
  selector: 'app-new-group',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './new-group.component.html',
  styleUrl: './new-group.component.css'
})
export class NewGroupComponent {
  public courses:Course[]=[];
  public courseId:number|null=null;

  constructor (private groupsService:GroupsService, private coursesService:CoursesService, private router:Router){
    coursesService.getCourses().subscribe({
      next:(courses)=>{
        this.courses=courses;
      }
    })
  }

  public groupSubmit(form:NgForm){
    this.groupsService.addGroup({...form.form.value, courseId:this.courseId}).subscribe({
      next:(data)=>{
        this.router.navigate(['groups','list']);
      }
  });
}
}

