import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ListStudentsComponent } from './components/students/list-students/list-students.component';
import { NewStudentComponent } from './components/students/new-student/new-student.component';

export const routes: Routes = [
    {path: "students/list", component:ListStudentsComponent},
    {path: "students/new", component:NewStudentComponent},
    {path: "", component:HomePageComponent}
];
