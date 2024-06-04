
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
  @Input() task?: Task;


}
