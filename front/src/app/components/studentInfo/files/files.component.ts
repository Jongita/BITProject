import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupsService } from '../../../services/groups.service';
import { lectureAndFiles } from '../../../models/lectureAndFiles';

@Component({
  selector: 'app-files',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './files.component.html',
  styleUrl: './files.component.css'
})
export class FilesComponent {
  public lectureAndFiles:lectureAndFiles[]=[];
  
  private loadlectureAndFiles(){
  this.groupsService.getlectureAndFiles(this.route.snapshot.params['id']).subscribe((data) => {
  this.lectureAndFiles=data;
  console.log(this.lectureAndFiles);
    });
  }
constructor (private route:ActivatedRoute, private router:Router, private groupsService:GroupsService){
  this.loadlectureAndFiles();
  
  

  }
}

