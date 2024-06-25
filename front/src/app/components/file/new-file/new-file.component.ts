import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FilesService } from '../../../services/files.service';
import { Router } from '@angular/router';
import { Lecture } from '../../../models/lecture';
import { LecturesService } from '../../../services/lectures.service';
import { File } from '../../../models/file';

@Component({
  selector: 'app-new-file',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './new-file.component.html',
  styleUrl: './new-file.component.css'
})
export class NewFileComponent {
  public fileForm:FormGroup;
  public filePreview:String|null=null;
  public lectures:Lecture[]=[];

  private loadLectures(){
  this.lecturesService.getLectures().subscribe((data)=>{
    this.lectures=data;
    });
  }

  constructor(private filesService:FilesService, private lecturesService:LecturesService, private router:Router){
    this.fileForm=new FormGroup({
      'lecture_id':new FormControl(null),
      'name':new FormControl(null),
      'visibility':new FormControl(null),
      'file':new FormControl(null),
    })
    this.loadLectures();
  }

   public onSubmitForm(){
    console.log(this.fileForm.value);
    const values=this.fileForm.value;
    this.filesService.addFile(new File(values.name, values.lecture_id, values.visibility), values.file).subscribe((result)=>{
      this.router.navigate(["/"]);
    });
  }
  
  public onFileChange(event:Event){
  const filesFile= (event.target as HTMLInputElement).files![0];

    const reader=new FileReader();
    reader.onload=()=>{
      this.filePreview=reader.result as String;
    }
    reader.readAsDataURL(filesFile);

    this.fileForm.patchValue({
      file:filesFile
    });
    this.fileForm.get("file")?.updateValueAndValidity();
  }

}

  
  
