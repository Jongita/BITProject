import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ListStudentsComponent } from './components/students/list-students/list-students.component';
import { NewStudentComponent } from './components/students/new-student/new-student.component';
import { ListGroupsComponent } from './components/groups/list-groups/list-groups.component';
import { ListCoursesComponent } from './components/courses/list-courses/list-courses.component';
import { NewGroupComponent } from './components/groups/new-group/new-group.component';
import { ListLecturesComponent } from './components/lectures/list-lectures/list-lectures.component';
import { NewLectureComponent } from './components/lectures/new-lecture/new-lecture.component';

export const routes: Routes = [
    {path: "students/list", component:ListStudentsComponent},
    {path: "students/new", component:NewStudentComponent},

    {path: "groups/list", component:ListGroupsComponent},
    {path: "groups/new", component:NewGroupComponent},
  
    {path: "courses/list", component:ListCoursesComponent},

    {path: "lectures/list", component:ListLecturesComponent},
    {path: "lectures/new", component:NewLectureComponent},
  

    {path: "", component:HomePageComponent}
];
