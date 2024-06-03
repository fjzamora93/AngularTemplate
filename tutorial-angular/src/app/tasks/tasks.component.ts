
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskComponent } from '../tasks/task/task.component'; 
import { DUMMY_TASKS } from './dummy-tasks';


@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskComponent]
})
export class TasksComponent {
  tasks = DUMMY_TASKS;
  //En este caso vamos a usar un signo de interrogación, que es como decimos que es posible que no haya un valor y somos conscientes de ello.
  @Input() name?: string; //Otra alternativa es @Input() name: string = string | undefined;
  @Input() id!: string;
  @Output() select = new EventEmitter();


  get selectedUserTasks() {
    let taskList: Array<any> = [];
    taskList = this.tasks.filter((task) => task.userId === this.id);
    return taskList;
  }


  onSelectUser(id: string){
    this.select.emit(this.name); 
  }

}
