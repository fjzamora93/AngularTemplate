
import { Component, Input } from '@angular/core';




@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //Aquí es donde hay que declarar el tipo de las variables de TypeScript.
  //La exclamación dice que la variable no será nula.
  @Input() avatar!: string;
  @Input() name!: string;

  get imagePath() {
    return `assets/users/${this.avatar}`;
  }
 
  onSelectUser(){
   
  }
}
