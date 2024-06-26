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

export const routes: Routes = [
    {path: "students/list", component:ListStudentsComponent},
    {path: "students/new", component:NewStudentComponent},

    {path: "groups/list", component:ListGroupsComponent},
    {path: "groups/new", component:NewGroupComponent},
    {path: "groups/:id", component:UpdateGroupComponent},
  
    {path: "courses/list", component:ListCoursesComponent},

    {path: "lectures/list", component:ListLecturesComponent},
    {path: "lectures/new", component:NewLectureComponent},
    {path: "lectures/:id", component:UpdateLectureComponent},

    {path: "files/list", component:ListFilesComponent},
    {path: "files/new", component:NewFileComponent},

    {path: "auth/signin", component:SigninComponent},
    {path: "auth/login", component:LoginComponent},

    {path:"profile", component:ProfileComponent},

    {path: "", component:HomePageComponent}
];
