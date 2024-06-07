
import { type NewTaskData } from '../task/task.model';
import { Component, Input, Output, EventEmitter, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DUMMY_TASKS, TaskService } from '../tasks.service';


@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})

export class NewTaskComponent {
  @Input({ required: true }) UserId!: string;
  @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  //Otra forma de instanciar el taskService con angular de forma transveral (la instancia es única para toda la aplicación)
  private taskService = inject(TaskService) //===   constructor(private taskService: TaskService){} Elige el que más te guste de los dos.

  onSubmit(){
    this.taskService.addTask({ 
      title: this.enteredTitle, 
      summary: this.enteredSummary, 
      dueDate: this.enteredDueDate 
    }, this.UserId);
    this.close.emit();
  }

  onCancel(){
    console.log('Emitimos un evento, pero no hacemos nada más. Es al recibir el evento cuando se activa la función que cerrará');
    this.close.emit();
  }

 
  

}
