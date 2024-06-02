import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { TaskComponent } from './task/task.component';  
import { DUMMY_USERS } from './dummy-users';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, UserComponent, TaskComponent]
})
export class AppComponent {
  title = 'tutorial-angular';
  //Podemos exportar desde Components al resto de componentes desde aquí
  users = DUMMY_USERS;
  selectedUserId = 'ul';

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId); //Si pusiéramos una ! al final sería que va a encontrar algún resultado sí o sí.
  }

  onSelectUser(id: string) {
    console.log('User selected AHORA', id)
    this.selectedUserId = id;
  }
}
