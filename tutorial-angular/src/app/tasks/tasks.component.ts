
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskComponent } from '../tasks/task/task.component'; 
import { NewTaskComponent } from './new-task/new-task.component';
import { DUMMY_TASKS, TaskService } from './tasks.service';


@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent {
  @Input() name?: string; //Otra alternativa es @Input() name: string = string | undefined;
  @Input({ required:true }) UserId!: string;
  @Output() select = new EventEmitter();
  tasks = DUMMY_TASKS;
  isAddingTask: boolean = false;

  //La instancia de TaskService se inyecta en el constructor, lo qu ela convierte en una clase TRANSVERSAL a todos los componentes.
  //En otras palabras, TaskService es un servicio que se puede usar en cualquier componente de la aplicación.
  constructor(private taskService: TaskService){}

  onSelectUser(id: string){
    this.select.emit(this.name); 
  }

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.UserId);
  }

  
  onSelectTask(id: string){
    console.log(id, ' ------- ', this.taskService.getUserTasks(this.UserId));
    this.taskService.removeTask(this.UserId);
  }
  
  onStartAddTask(){
      this.isAddingTask = true;
      console.log('Añadiendo tarea = ', this.isAddingTask);
  }

  onCloseAddTask(){
    this.isAddingTask = false;
  }

}
