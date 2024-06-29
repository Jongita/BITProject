import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Group } from '../models/group';
import { studentGroup } from '../models/studentGroups';
import { lectureAndFiles } from '../models/lectureAndFiles';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(private http:HttpClient) { 
    
  }

  public getGroups(){
    return this.http.get<Group[]>('http://localhost:5999/groups/');
  }

  public getGroup(id:number) {
    return this.http.get<Group>('http://localhost:5999/groups/'+id);
  }

  public addGroup(group:Group){
    return this.http.post('http://localhost:5999/groups/', group);
  }

  public updateGroup(group:Group){
    return this.http.put('http://localhost:5999/groups/', group);
  }

  public deleteGroup(id:number){
    return this.http.delete('http://localhost:5999/groups/'+id);
  }
  
  // studentInfo
   public getStudentGroup(studentId:number) {
    return this.http.get<studentGroup[]>('http://localhost:5999/studentInfo/'+studentId);

  }

    public getlectureAndFiles(id:number) {
    return this.http.get<lectureAndFiles[]>('http://localhost:5999/studentFiles/'+id);

  }
}
