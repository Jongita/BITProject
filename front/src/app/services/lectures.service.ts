import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lecture } from '../models/lecture';

@Injectable({
  providedIn: 'root'
})
export class LecturesService {

  constructor(private http:HttpClient) { 
    
  }

  public getLectures(){
    return this.http.get<Lecture[]>('http://localhost:5999/lectures/');
  }

  public addLecture(lecture:Lecture){
    return this.http.post('http://localhost:5999/lectures/', lecture);
  }

  public deleteLecture(id:number){
    return this.http.delete('http://localhost:5999/lectures/'+id);
  }
}
