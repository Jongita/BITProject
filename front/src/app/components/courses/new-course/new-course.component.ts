import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CoursesService } from '../../../services/courses.service';
import { Router } from '@angular/router';
import { Course } from '../../../models/course';

@Component({
  selector: 'app-new-course',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './new-course.component.html',
  styleUrl: './new-course.component.css'
})
export class NewCourseComponent {
  public courses:Course[]=[];


  constructor (private courseService:CoursesService, private router:Router){
  }

  public courseSubmit(form:NgForm){
    this.courseService.addCourse(form.form.value).subscribe({
      next:(data)=>{
        this.router.navigate(['courses','list']);
      }
  });
}
}

