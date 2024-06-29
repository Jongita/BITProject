import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../../../services/courses.service';
import { FormsModule, NgForm } from '@angular/forms';
import { ErrorComponent } from '../../helper/error/error.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-course',
  standalone: true,
  imports: [ErrorComponent, FormsModule, CommonModule],
  templateUrl: './update-course.component.html',
  styleUrl: './update-course.component.css'
})
export class UpdateCourseComponent {
    public name:string="";
    public id?:number;

    public isError = false;
    public errorText="";

  constructor (private route:ActivatedRoute, private router:Router, private coursesService:CoursesService){
    this.coursesService.getCourse(this.route.snapshot.params['id']).subscribe({
      next:(course)=>{
      this.id=course.id;
      this.name=course.name;

    },
    error:(error)=>{
      console.log(error);
      this.isError=true;
      this.errorText=error.error.text
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
        this.isError=true;
        this.errorText=error.error.text;
      }
    })
  }
}
