import { Component } from '@angular/core';
import { Lecture } from '../../../models/lecture';
import { GroupsService } from '../../../services/groups.service';
import { LecturesService } from '../../../services/lectures.service';
import { Group } from '../../../models/group';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-lectures',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './list-lectures.component.html',
  styleUrl: './list-lectures.component.css'
})
export class ListLecturesComponent {
  public lectures:Lecture[]=[];
  public groups:Group[]=[];
  

  private loadGroups(){
  this.groupsService.getGroups().subscribe((data)=>{
    this.groups=data;
    });
  }

  private loadLectures(){
  this.lecturesService.getLectures().subscribe((data)=>{
    this.lectures=data;
    });
  }

  constructor (private lecturesService:LecturesService, private groupsService:GroupsService){
    this.loadGroups();
    this.loadLectures();
  }

  public deleteLecture(id:number){
    this.lecturesService.deleteLecture(id).subscribe((data)=>{
      this.loadLectures();
    });

  }

  public getGroupName(id:number){
    let result="";
    this.groups.forEach((group)=>{ 
      if (group.id==id) 
        result= group.name;
    });
    return result;
  }
}
