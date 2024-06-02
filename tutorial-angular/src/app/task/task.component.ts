
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  //En este caso vamos a usar un signo de interrogación, que es como decimos que es posible que no haya un valor y somos conscientes de ello.
  @Input() name?: string; //Otra alternativa es @Input() name: string = string | undefined;
  @Output() select = new EventEmitter();


  onSelectUser(id: string){
    this.select.emit(this.name); 
  }

}
