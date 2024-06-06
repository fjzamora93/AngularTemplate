
import { type NewTaskData } from '../task/task.model';
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})

export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();
  enteredTitle = '';
  enteredSummary = '';

  //Enfoque con signal: solo hay que meter la función, no cambia nada en el HTML
  enteredDueDate = signal('');

  onCancel(){
    console.log('Emitimos un evento, pero no hacemos nada más. Es al recibir el evento cuando se activa la función que cerrará');
    this.cancel.emit();
  }

 
  onSubmit(){
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate() //al ser un signals, aquí va la función
    });
    console.log('añadiendo', this.enteredTitle);
  }

}
