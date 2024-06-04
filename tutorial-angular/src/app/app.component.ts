import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { TasksComponent } from './tasks/tasks.component';  
import { DUMMY_USERS } from './dummy-users';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent]
})
export class AppComponent {
  //Podemos exportar desde Components al resto de componentes desde aquí
  users = DUMMY_USERS;

  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId); //Si pusiéramos una ! al final sería que va a encontrar algún resultado sí o sí.
  }

  //Si te fijas, en user.component tienes un método que se llama onSelectUser, que emite un evento. Esto es lo que asignará el valor de selectedUserId.
  onSelectUser(id: string) {
    console.log('User selected AHORA', id)
    this.selectedUserId = id;
  }
}
