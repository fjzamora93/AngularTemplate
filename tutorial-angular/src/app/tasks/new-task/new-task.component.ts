
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { type Task } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})

export class NewTaskComponent {


  confirmar(){
    console.log('Confirmar tarea');
  }
}
