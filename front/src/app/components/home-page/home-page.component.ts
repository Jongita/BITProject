import { Component } from '@angular/core';
import { studentGroup} from '../../models/studentGroups';
import { GroupsService } from '../../services/groups.service';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  public studentGroups:studentGroup[]=[];
  

constructor (private route:ActivatedRoute, private router:Router, private groupsService:GroupsService, authService:AuthService){
  if (authService.user!=null && authService.user.id!=null){
  this.groupsService.getStudentGroup(authService.user.id).subscribe((data) => {
  this.studentGroups = data;
    console.log(data);
});
  }
}

    
    
}

