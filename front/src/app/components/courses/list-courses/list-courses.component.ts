import { Component } from '@angular/core';
import { Course } from '../../../models/course';
import { CoursesService } from '../../../services/courses.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-courses',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './list-courses.component.html',
  styleUrl: './list-courses.component.css'
})
export class ListCoursesComponent {
public courses:Course[]=[];

  private loadCourses(){
  this.courseService.getCourses().subscribe((data)=>{
    this.courses=data;
    });
  }

  constructor (private courseService:CoursesService){
    this.loadCourses();
  }
}
