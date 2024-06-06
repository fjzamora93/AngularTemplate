import { Component } from '@angular/core';

/**
 * En esta sección vamos a ver cómo utilizar componentes envolventes.
 * Es habitual que en una aplicación haya componentes que se repiten en varios sitios.
 * En lugar de repetir el código, podemos encapsularlo en un componente envolvente.
 * 
 * A este componente se le llama "wrapper component" o "componente envolvente".
 * Por su parte, el elemento "envuelto" se llama "wrapped component" o "componente envuelto".
 * 
 * En esta sección, app-card hará referencia a un wrapper.
 */


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

}
