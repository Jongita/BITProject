import { Component } from '@angular/core';
import { Course } from '../../../models/course';
import { CoursesService } from '../../../services/courses.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-courses',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './list-courses.component.html',
  styleUrl: './list-courses.component.css'
})
export class ListCoursesComponent {
public courses:Course[]=[];

  private loadCourses(){
  this.courseService.getCourses().subscribe((data)=>{
    this.courses=data;
    console.log(data);
    });
  }

  constructor (private courseService:CoursesService){
    this.loadCourses();
  }

  public deleteCourse(id:number){
    this.courseService.deleteCourse(id).subscribe((data)=>{
      this.loadCourses();
    });

  }
}
