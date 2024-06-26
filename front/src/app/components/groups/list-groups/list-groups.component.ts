import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GroupsService } from '../../../services/groups.service';
import { Group } from '../../../models/group';
import { RouterLink } from '@angular/router';
import { CoursesService } from '../../../services/courses.service';
import { Course } from '../../../models/course';
import { Lecturer } from '../../../models/lecturers';
import { LecturersService } from '../../../services/lecturers.service';

@Component({
  selector: 'app-list-groups',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './list-groups.component.html',
  styleUrl: './list-groups.component.css'
})
export class ListGroupsComponent {
  public groups:Group[]=[];
  public courses:Course[]=[];
  public lecturers:Lecturer[]=[];
  

  private loadGroups(){
  this.groupsService.getGroups().subscribe((data)=>{
    this.groups=data;
    });
  }

  private loadCourses(){
  this.coursesService.getCourses().subscribe((data)=>{
    this.courses=data;
    });
  }

  private loadLecturers(){
  this.lecturersService.getLecturers().subscribe((data)=>{
    this.lecturers=data;
    });
  }


  constructor (private groupsService:GroupsService, private coursesService:CoursesService, private lecturersService:LecturersService){
    this.loadGroups();
    this.loadCourses();
    this.loadLecturers();
  }

  public deleteGroup(id:number){
    this.groupsService.deleteGroup(id).subscribe((data)=>{
      this.loadGroups();
    });

  }

  public getCourseName(id:number){
    let result="";
    this.courses.forEach((course)=>{ 
      if (course.id==id) 
        result= course.name;
    });
    return result;
  }

  public getLecturerName(id:number){
    let result="";
    this.lecturers.forEach((lecturer)=>{ 
      if (lecturer.id==id) 
        result= `${lecturer.name} ${lecturer.surname}`;
    });
    return result;
  }
}
