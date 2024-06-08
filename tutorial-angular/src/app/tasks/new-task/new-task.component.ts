
import { type Task } from '../task/task.model';
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
  @Input() taskEdit?: Task | null = null;
  @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';
  isNewTask: boolean = true;

  //Otra forma de instanciar el taskService con angular de forma transveral (la instancia es única para toda la aplicación)
  private taskService = inject(TaskService) //===   constructor(private taskService: TaskService){} Elige el que más te guste de los dos.

  onSubmit(){
    if (this.isNewTask) {
      console.log('Nueva tarea añadida');
      this.taskService.addTask({ 
        title: this.enteredTitle, 
        summary: this.enteredSummary, 
        dueDate: this.enteredDueDate 
      }, this.UserId);
    } else {      
        console.log('Remplazando una tarea que ya existe', this.taskEdit!.id, this.taskEdit!);
        //Actualizamos los valores de TaskEdit por los que haya ahora en el formulario
        this.taskEdit!.title = this.enteredTitle;
        this.taskEdit!.summary = this.enteredSummary;
        this.taskEdit!.dueDate = this.enteredDueDate;
        this.taskService.replaceTask(this.taskEdit!.id, this.taskEdit!);
    }
    //Reseteamos los valores de los campos poniéndolos a null
    this.enteredTitle = '';
    this.enteredSummary = '';
    this.enteredDueDate = '';
    this.close.emit();
  }

  onCancel(){
    console.log('Emitimos un evento, pero no hacemos nada más. Es al recibir el evento cuando se activa la función que cerrará');
    this.close.emit();
    this.enteredTitle = '';
    this.enteredSummary = '';
    this.enteredDueDate = '';
    
  }

  //Este método se ejecuta cada vez que se detectan cambios en el componente (por ejemplo, el valor de title cambia de null a un texto)
  ngOnChanges(){
    console.log('CAMBIOS');
    if (this.taskEdit) {
        this.onEdit();
      }
  }

  onEdit(){
    console.log('Editando tarea en new-task.component', this.taskEdit);
    this.enteredTitle = this.taskEdit!.title;
    this.enteredSummary = this.taskEdit!.summary;
    this.enteredDueDate = this.taskEdit!.dueDate;
    this.isNewTask = false;
  } 

}
