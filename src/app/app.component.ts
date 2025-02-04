import { Component } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { TodolistComponent } from "./todolist/todolist.component";
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,RouterModule, HomeComponent, TodolistComponent,AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Routing';
}
