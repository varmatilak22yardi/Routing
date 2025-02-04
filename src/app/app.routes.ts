import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodolistComponent } from './todolist/todolist.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todolist', component: TodolistComponent },
  { path: '**', redirectTo: '' } // Redirect unknown routes to home
];
