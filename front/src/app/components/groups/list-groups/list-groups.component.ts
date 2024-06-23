import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GroupsService } from '../../../services/groups.service';
import { Group } from '../../../models/group';
import { RouterLink } from '@angular/router';
import { CoursesService } from '../../../services/courses.service';
import { Course } from '../../../models/course';

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

  constructor (private groupsService:GroupsService, private coursesService:CoursesService){
    this.loadGroups();
    this.loadCourses();
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
}
