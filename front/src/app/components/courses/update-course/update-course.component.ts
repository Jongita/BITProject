import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../../../services/courses.service';
import { FormsModule, NgForm } from '@angular/forms';
import { ErrorComponent } from '../../helper/error/error.component';
import { CommonModule } from '@angular/common';
import { ErrorService } from '../../../services/error.service';

@Component({
  selector: 'app-update-course',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-course.component.html',
  styleUrl: './update-course.component.css'
})
export class UpdateCourseComponent {
    public name:string="";
    public id?:number;

  constructor (private route:ActivatedRoute, private router:Router, private coursesService:CoursesService, private errorService:ErrorService){
    this.coursesService.getCourse(this.route.snapshot.params['id']).subscribe({
      next:(course)=>{
      this.id=course.id;
      this.name=course.name;

    },
    error:(error)=>{
      console.log(error);
      this.errorService.errorEmitter.emit(error.error.text)
    }
  })
  }

  public courseSubmit(form:NgForm){
    this.coursesService.updateCourse({id:this.id, ...form.form.value}).subscribe({
      next:(data)=>{
        console.log(data);
        this.router.navigate(['courses', 'list']);
      },
      error:(error)=>{
        this.errorService.errorEmitter.emit(error.error.text)
      }
    })
  }
}
