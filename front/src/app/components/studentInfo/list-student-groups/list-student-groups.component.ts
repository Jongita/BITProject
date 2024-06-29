import { Component } from '@angular/core';
import { studentGroup } from '../../../models/studentGroups';
import { Router, RouterLink } from '@angular/router';
import { GroupsService } from '../../../services/groups.service';
import { AuthService } from '../../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-student-groups',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './list-student-groups.component.html',
  styleUrl: './list-student-groups.component.css'
})
export class ListStudentGroupsComponent {
  public studentGroups:studentGroup[]=[];
  

constructor (private router:Router, private groupsService:GroupsService, authService:AuthService){
  if (authService.user!=null && authService.user.id!=null){
  this.groupsService.getStudentGroup(authService.user.id).subscribe((data) => {
  this.studentGroups = data;
    console.log(data);
});
  }
}
}

