import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { Group } from '../models/group';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http:HttpClient) { }

  public getStudents(){
    return this.http.get<Student[]>('http://localhost:5999/students/');
  }

  public addStudent(student:Student){
    return this.http.post('http://localhost:5999/students/', student);
  }

  public getGroups(){
    return this.http.get<Group[]>('http://localhost:5999/groups/');
  }
}
