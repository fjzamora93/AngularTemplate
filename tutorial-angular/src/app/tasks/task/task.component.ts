
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { type Task } from './task.model'; //Importamos la interfaz Task desde task


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() select = new EventEmitter();

onSelectTask(){
  console.log('Task selected', this.task.id);
  this.select.emit(this.task.id); 
}

}
