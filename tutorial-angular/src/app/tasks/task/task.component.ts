
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { type Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component"; //Importamos la interfaz Task desde task


@Component({
    selector: 'app-task',
    standalone: true,
    templateUrl: './task.component.html',
    styleUrl: './task.component.css',
    imports: [CardComponent]
})

export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() select = new EventEmitter();

onSelectTask(){
  console.log('Task selected', this.task.id);
  this.select.emit(this.task.id); 
}

}
