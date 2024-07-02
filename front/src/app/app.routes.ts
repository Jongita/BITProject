import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ListStudentsComponent } from './components/students/list-students/list-students.component';
import { NewStudentComponent } from './components/students/new-student/new-student.component';
import { ListGroupsComponent } from './components/groups/list-groups/list-groups.component';
import { ListCoursesComponent } from './components/courses/list-courses/list-courses.component';
import { NewGroupComponent } from './components/groups/new-group/new-group.component';
import { ListLecturesComponent } from './components/lectures/list-lectures/list-lectures.component';
import { NewLectureComponent } from './components/lectures/new-lecture/new-lecture.component';
import { UpdateGroupComponent } from './components/groups/update-group/update-group.component';
import { UpdateLectureComponent } from './components/lectures/update-lecture/update-lecture.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ListFilesComponent } from './components/file/list-files/list-files.component';
import { NewFileComponent } from './components/file/new-file/new-file.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { viewGuard } from './guards/view.guard';
import { editUsersGuard } from './guards/edit-users.guard';
import { ListStudentGroupsComponent } from './components/studentInfo/list-student-groups/list-student-groups.component';
import { FilesComponent } from './components/studentInfo/files/files.component';
import { NewCourseComponent } from './components/courses/new-course/new-course.component';
import { UpdateCourseComponent } from './components/courses/update-course/update-course.component';
import { UpdateStudentComponent } from './components/students/update-student/update-student.component';

export const routes: Routes = [
    {path: "students/list", component:ListStudentsComponent, canActivate:[editUsersGuard]},
    {path: "students/new", component:NewStudentComponent, canActivate:[editUsersGuard]},
    {path: "students/:id", component:UpdateStudentComponent, canActivate:[editUsersGuard]},

    {path: "groups/list", component:ListGroupsComponent, canActivate:[editUsersGuard]},
    {path: "groups/new", component:NewGroupComponent, canActivate:[editUsersGuard]},
    {path: "groups/:id", component:UpdateGroupComponent, canActivate:[editUsersGuard]},
  
    {path: "courses/list", component:ListCoursesComponent, canActivate:[editUsersGuard]},
    {path: "courses/new", component:NewCourseComponent, canActivate:[editUsersGuard]},
    {path: "courses/:id", component:UpdateCourseComponent, canActivate:[editUsersGuard]},
   
    {path: "lectures/list", component:ListLecturesComponent, canActivate:[editUsersGuard]},
    {path: "lectures/new", component:NewLectureComponent, canActivate:[editUsersGuard]},
    {path: "lectures/:id", component:UpdateLectureComponent, canActivate:[editUsersGuard]},

    {path: "files/list", component:ListFilesComponent, canActivate:[editUsersGuard]},
    {path: "files/new", component:NewFileComponent, canActivate:[editUsersGuard]},

    {path: "auth/signin", component:SigninComponent},
    {path: "auth/login", component:LoginComponent},

    {path:"users/profile", component:ProfileComponent},

    {path:"studentsInfo/list", component:ListStudentGroupsComponent, canActivate:[viewGuard]},
    {path:"studentFiles/:id", component:FilesComponent, canActivate:[viewGuard]},
  
    {path: "", component:HomePageComponent}
  
];
