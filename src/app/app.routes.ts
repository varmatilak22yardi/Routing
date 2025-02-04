import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodolistComponent } from './todolist/todolist.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todolist', component: TodolistComponent },
  {path:'about',component:AboutComponent},
  { path: '**', redirectTo: '' } // Redirect unknown routes to home
];
