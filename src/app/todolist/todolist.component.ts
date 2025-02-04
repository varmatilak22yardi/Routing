import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';


interface Task{
  id:number;
  title:string;
}

@Component({
  selector: 'app-todolist',
  standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  newTask:string='';
  tasks:Task[]=[];

  addTask(){
    if (this.newTask.trim()){
      this.tasks.push({
        id:Date.now(),
        title:this.newTask
      });
      this.newTask="";
    }
  }

  removeTask(taskId:number){
    this.tasks=this.tasks.filter(task=>task.id!==taskId);
  }

}
