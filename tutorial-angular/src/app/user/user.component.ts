
import { Component, Input, Output, EventEmitter, input, output, computed } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

//Input, Output, EventEmitter es el decorator para el sistema clásico, 
//input, output y computed funciones de Signals.

//CREAMOS UN INTERFACE DE USER



@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    imports: [CardComponent]
})

/*Aquí es donde vamos a definir las propiedades de nuestro componente.
    -La exclamación dice que la propiedad no será nula. El required, hace obligatorio el campo.
    -Como en Python, se accede a los getters sin los paréntesis al llamar a la función. */

export class UserComponent {
  // @Input({ required: true }) id!: string;
  // @Input() avatar!: string;
  // @Input({required: true}) name!: string;
  // LAS TRES LÍNEAS ANTERIORES LAS VAMOS A SIMPLIFICAR CON UN INTERFACE, QUE QUEDARÁ ASÍ:

  @Input({ required: true}) user! : User;
  @Input({ required: true}) selected!:boolean;
  @Output() select = new EventEmitter();
  //selectSignals = output<string>(); FORMA ALTERNATIVA AL Output, pero hace lo mismo y no cambia nada.

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  onSelectUser(){
    this.select.emit(this.user.id); //Esta línea "emite" un evento que se llama "select" desde el componente.
  }

        /*ENFOQUE CON SIGNALS

  avatarSignals = input<String>('valor por defecto'); //Con valor por defecto porque no es obligatorio
  nameSignals = input.required<String>(); //Sin valor por defecto porque es obligatorio
  imagePathSignals = computed(() => {
    return `assets/users/${this.avatarSignals()}`;
    }); */

}
