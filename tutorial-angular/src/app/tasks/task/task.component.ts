
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { type Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component"; //Importamos la interfaz Task desde task
import { TaskService } from '../tasks.service';

@Component({
    selector: 'app-task',
    standalone: true,
    templateUrl: './task.component.html',
    styleUrl: './task.component.css',
    imports: [CardComponent, DatePipe]
})

export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() edit = new EventEmitter<Task>();


  //y aquí volvemos a poner nuestro constructor transversal de TaskService
  constructor (private taskService: TaskService){}

onCompleteTask(){
  console.log('Task selected', this.task.id);
  this.taskService.removeTask(this.task.id);
}

onEditTask(){
    //console.log(`Emitiendo tarea desde task.component: ${this.task.id} `)
    this.edit.emit(this.task);
}

}
