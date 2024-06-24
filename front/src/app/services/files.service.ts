import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { File } from '../models/file';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private http:HttpClient) { 
    
  }

  public getFiles(){
    return this.http.get<File[]>('http://localhost:5999/files/');
  }

  public getFile(id:number) {
    return this.http.get<File>('http://localhost:5999/files/'+id);
  }

  // public addFile(file:File){
  //   return this.http.post('http://localhost:5999/files/', file);
  // }

  public addFileDataAndFile(file:File, fileNew:any){
    const postFile=new FormData();
    postFile.append('name', file.name!);

    const lectureId = file.lecture_id ? file.lecture_id.toString() : '1';

    postFile.append('lecture_id', lectureId);
    postFile.append('file', fileNew);
    postFile.append('visibility', file.visibility!);
    return this.http.post('http://localhost:5999/files/'+file.id, postFile);

  }

  public updateFile(file:File){
    return this.http.put('http://localhost:5999/files/', file);
  }

  public deleteFile(id:number){
    return this.http.delete('http://localhost:5999/files/'+id);
  }
}


 