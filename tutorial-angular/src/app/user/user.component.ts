
import { Component, Input, input, computed } from '@angular/core';

//Input es el decorator, input es una función.



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

  //Sin el required, estamos diciendo una mentira. Ya que le decimos que el valor no será nulo, pero no es obligatorio.
  @Input({required: true}) name!: string;

  //Al igual que en Python, uno puede acceder a los getters sin los paréntesis al llamar a la función.
  get imagePath() {
    return `assets/users/${this.avatar}`;
  }


/*ENFOQUE CON SIGNALS

  avatarSignals = input<String>('valor por defecto'); //Con valor por defecto porque no es obligatorio
  nameSignals = input.required<String>(); //Sin valor por defecto porque es obligatorio
  imagePathSignals = computed(() => {
    return `assets/users/${this.avatarSignals()}`;
    });
*/
  onSelectUser(){
    console.log(`User ${this.name} selected`);
  }
}
