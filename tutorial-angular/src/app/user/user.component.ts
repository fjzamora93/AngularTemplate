
//Signals es una forma evolucionada de detectar eventos, frente a la clásica forma de hacerlo con métodos.
import { Component, signal, computed } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  
  /*MÉTODO CLÁSICO (hace verificaciones manuales):
   
  selectedUser = DUMMY_USERS[randomIndex]

  get imagePath() {
    return `assets/users/${this.selectedUser.avatar}`;
  }*/

  //MÉTODO CON SIGNALS (favorece reacciones en cadena):
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  //computed asigna valores derivados de Signals, en este caso, la señal selectedUser.
  imagePath = computed(() => `assets/users/${this.selectedUser().avatar}`);

  onSelectUser(){
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
