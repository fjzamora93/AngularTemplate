
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
  @Output() select = new EventEmitter<void>();

  onCancel(){
    console.log('Emitimos un evento, pero no hacemos nada más. Es al recibir el evento cuando se activa la función que cerrará');
    this.select.emit();
  }
}
