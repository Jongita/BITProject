import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lecturer } from '../models/lecturers';

@Injectable({
  providedIn: 'root'
})
export class LecturersService {

  constructor(private http:HttpClient) { }

  public getLecturers(){
    return this.http.get<Lecturer[]>('http://localhost:5999/lecturers/');
  }
}