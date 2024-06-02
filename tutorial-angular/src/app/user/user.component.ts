
import { Component, Input, Output, EventEmitter, input, output, computed } from '@angular/core';

//Input, Output, EventEmitter es el decorator para el sistema clásico, 
//input, output y computed funciones de Signals.



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

//Aquí es donde vamos a definir las propiedades de nuestro componente.
  //  -La exclamación dice que la propiedad no será nula. El required, hace obligatorio el campo.
  //  -Como en Python, se accede a los getters sin los paréntesis al llamar a la función.

export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input() avatar!: string;
  @Input({required: true}) name!: string;
  @Output() select = new EventEmitter();
  //selectSignals = output<string>(); FORMA ALTERNATIVA AL Output, pero hace lo mismo y no cambia nada.

  get imagePath() {
    return `assets/users/${this.avatar}`;
  }

  onSelectUser(){
    this.select.emit(this.id); //Imprime por consola un mensaje estándar (user id selected)
  }

        /*ENFOQUE CON SIGNALS

  avatarSignals = input<String>('valor por defecto'); //Con valor por defecto porque no es obligatorio
  nameSignals = input.required<String>(); //Sin valor por defecto porque es obligatorio
  imagePathSignals = computed(() => {
    return `assets/users/${this.avatarSignals()}`;
    }); */

}