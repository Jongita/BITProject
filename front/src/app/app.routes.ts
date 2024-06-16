import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ListStudentsComponent } from './components/students/list-students/list-students.component';

export const routes: Routes = [
    {path: "students/list", component:ListStudentsComponent},
    {path: "", component:HomePageComponent}
];
