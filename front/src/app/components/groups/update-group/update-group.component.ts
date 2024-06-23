import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupsService } from '../../../services/groups.service';
import { CoursesService } from '../../../services/courses.service';
import { Course } from '../../../models/course';

@Component({
  selector: 'app-update-group',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-group.component.html',
  styleUrl: './update-group.component.css'
})
export class UpdateGroupComponent {
    public courses:Course[]=[];
    public name:string="";
    public course_id:number=0;
    public email:string="";
    public lecturer_id:number=0;
    public startdate:Date=new Date;
    public enddate:Date=new Date;
    public id?:number;

  constructor (private route:ActivatedRoute, private router:Router, private groupsService:GroupsService, private coursesService:CoursesService){
     coursesService.getCourses().subscribe({
      next:(courses)=>{
        this.courses=courses;
      }
    })
    console.log(this.route.snapshot.params['id']);
    this.groupsService.getGroup(this.route.snapshot.params['id']).subscribe({
      next:(group)=>{
      this.id=group.id;
      this.name=group.name;
      this.course_id=group.course_id;
      this.email=group.email;
      this.lecturer_id=group.lecturer_id;
      this.startdate=group.startdate;
      this.enddate=group.enddate;
    }
  })
  }

  public groupSubmit(form:NgForm){
    this.groupsService.updateGroup({id:this.id, ...form.form.value}).subscribe({
      next:(data)=>{
        this.router.navigate(['groups', 'list']);
      }
    })
  }
}



