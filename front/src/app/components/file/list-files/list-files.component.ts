import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Lecture } from '../../../models/lecture';
import { FilesService } from '../../../services/files.service';
import { LecturesService } from '../../../services/lectures.service';
import { File } from '../../../models/file';

@Component({
  selector: 'app-list-files',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './list-files.component.html',
  styleUrl: './list-files.component.css'
})
export class ListFilesComponent {
  public lectures:Lecture[]=[];
  public files:File[]=[];
  

  private loadFiles(){
  this.filesService.getFiles().subscribe((data)=>{
    this.files=data;
    });
  }

  private loadLectures(){
  this.lecturesService.getLectures().subscribe((data)=>{
    this.lectures=data;
    });
  }

  constructor (private lecturesService:LecturesService, private filesService:FilesService){
    this.loadFiles();
    this.loadLectures();
  }

  public deleteLecture(id:number){
    this.lecturesService.deleteLecture(id).subscribe((data)=>{
      this.loadLectures();
    });

  }

  public getLectureName(id:number){
    let result="";
    this.lectures.forEach((lecture)=>{ 
      if (lecture.id==id) 
        result= lecture.name;
    });
    return result;
  }
}


