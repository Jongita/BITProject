import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Group } from '../../../models/group';
import { LecturesService } from '../../../services/lectures.service';
import { GroupsService } from '../../../services/groups.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-lecture',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './new-lecture.component.html',
  styleUrl: './new-lecture.component.css'
})
export class NewLectureComponent {
  public groups:Group[]=[];
  public groupId:number|null=null;

  constructor (private lecturesService:LecturesService, private groupsService:GroupsService, private router:Router){
   groupsService.getGroups().subscribe({
      next:(groups)=>{
        this.groups=groups;
      }
    })
  }

  public lectureSubmit(form:NgForm){
    this.lecturesService.addLecture({...form.form.value, groupId:this.groupId}).subscribe({
      next:(data)=>{
        this.router.navigate(['lectures','list']);
      }
  });
}
}
