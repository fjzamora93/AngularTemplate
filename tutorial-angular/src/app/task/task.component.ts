
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter();


  onSelectUser(){
    this.select.emit(this.name); 
  }

}
