import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http:HttpClient) { 
    
  }

    public getCourses(){
    return this.http.get<Course[]>('http://localhost:5999/courses/');
  }
}
