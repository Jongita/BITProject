import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { GroupsService } from '../../../services/groups.service';
import { Router } from '@angular/router';
import { CoursesService } from '../../../services/courses.service';
import { Course } from '../../../models/course';
import { LecturersService } from '../../../services/lecturers.service';
import { Lecturer } from '../../../models/lecturers';

@Component({
  selector: 'app-new-group',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './new-group.component.html',
  styleUrl: './new-group.component.css'
})
export class NewGroupComponent {
  public courses:Course[]=[];
  public course_id:number|null=null;
  public lecturers:Lecturer[]=[];
  public lecturer_id:number|null=null;

  constructor (private groupsService:GroupsService, private coursesService:CoursesService, private router:Router, private lecturersService:LecturersService){
    coursesService.getCourses().subscribe({
      next:(courses)=>{
        this.courses=courses;
      }
    })
    lecturersService.getLecturers().subscribe({
      next:(lecturers)=>{
        this.lecturers=lecturers;
      }
    })
  }

  public groupSubmit(form:NgForm){
    this.groupsService.addGroup({...form.form.value, course_id:this.course_id, lecturer_id:this.lecturer_id }).subscribe({
      next:(data)=>{
        this.router.navigate(['groups','list']);
      }
  });
}
}

