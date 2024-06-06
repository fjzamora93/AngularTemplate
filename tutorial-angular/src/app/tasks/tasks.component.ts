
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskComponent } from '../tasks/task/task.component'; 
import { NewTaskComponent } from './new-task/new-task.component';
import { DUMMY_TASKS } from './dummy-tasks';
import { type NewTaskData } from './task/task.model';


@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent {
  tasks = DUMMY_TASKS;
  isAddingTask: boolean = false;
 
  //En este caso vamos a usar un signo de interrogación, que es como decimos que es posible que no haya un valor y somos conscientes de ello.
  @Input() name?: string; //Otra alternativa es @Input() name: string = string | undefined;
  @Input() id!: string;
  @Output() select = new EventEmitter();


  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.id);
  }

  onSelectUser(id: string){
    this.select.emit(this.name); 
  }

  onSelectTask(id: string){
    console.log(id, ' ------- ', this.selectedUserTasks);
    this.tasks = this.selectedUserTasks.filter((task) => task.id !== id);
  }
  
  onStartAddTask(){
      this.isAddingTask = true;
      console.log('Añadir tarea = ', this.isAddingTask);
  }

  onCancelAddTask(){
    this.isAddingTask = false;
  }

  onSubmitAddTask(taskdata: NewTaskData){
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId : this.id,
      title: taskdata.title,
      summary: taskdata.summary,
      dueDate: taskdata.dueDate,
    })
    this.isAddingTask = false;
  }

}
