import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { groupStudent } from '../models/groupStudent';


@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http:HttpClient) { }

  public getStudents(){
    return this.http.get<Student[]>('http://localhost:5999/students/');
  }

  public getStudent(id:number){
    return this.http.get<Student>('http://localhost:5999/students/'+id);
  }

  public updateStudent(student:Student){
    return this.http.put('http://localhost:5999/students/', student);
  }

  public addStudent(student:Student){
    return this.http.post('http://localhost:5999/students/', student);
  }

  public addStudenttoGroup(groupStudent:groupStudent){
    return this.http.post('http://localhost:5999/groupstudent/', groupStudent);
  }

  public deleteStudent(id:number){
    return this.http.delete('http://localhost:5999/students/'+id);
  }

  // public  deleteStudentFromGroup(groupStudent:groupStudent){
  //   return this.http.delete('http://localhost:5999/groupstudent/', groupStudent);
  // }

}

