import { Component } from '@angular/core';
import { Group } from '../../../models/group';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupsService } from '../../../services/groups.service';
import { LecturesService } from '../../../services/lectures.service';
import { CommonModule, NgForOf } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ErrorComponent } from '../../helper/error/error.component';
import { ErrorService } from '../../../services/error.service';

@Component({
  selector: 'app-update-lecture',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-lecture.component.html',
  styleUrl: './update-lecture.component.css'
})
export class UpdateLectureComponent {
public groups:Group[]=[];
    public name:string="";
    public group_id:number=0;
    public date:Date=new Date;
    public description:string="";
    public id?:number;

  constructor (private route:ActivatedRoute, private router:Router, private groupsService:GroupsService, private lecturesService:LecturesService, private errorService:ErrorService){
     groupsService.getGroups().subscribe({
      next:(groups)=>{
        this.groups=groups;
      }
    })
    console.log(this.route.snapshot.params['id']);
    this.lecturesService.getlecture(this.route.snapshot.params['id']).subscribe({
      next:(lecture)=>{
      this.id=lecture.id;
      this.name=lecture.name;
      this.group_id=lecture.group_id;
      this.date=lecture.date;
      this.description=lecture.description;
    },
    error:(error)=>{
     this.errorService.errorEmitter.emit(error.error.text);
    }
  })
  }

  public lectureSubmit(form:NgForm){
    this.lecturesService.updatelecture({id:this.id, ...form.form.value}).subscribe({
      next:(data)=>{
        this.router.navigate(['lectures', 'list']);
      },
      error:(error)=>{
     this.errorService.errorEmitter.emit(error.error.text);
    }
    })
  }
}

