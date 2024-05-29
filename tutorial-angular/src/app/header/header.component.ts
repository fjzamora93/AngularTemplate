/**Esta clase sirve solo de ejemplo para mostrar cómo se crean los componentes, 
 * incluye una explicación línea a línea*/

/*El nombre convencional para la clase de un componente es el selector.component,
 lo que dará a la clase -> SelectorComponent

 Para que los componentes puedan ser utilizados, deberán introducirse en nuestro html tal que así:
 <app-header></app-header>
**/
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
//El selector no puede ser 'header' ya que entonces iría directo a por el header, así que por convencionalismo será app-header
  selector: 'app-header',
//A continuación crearemos una URL donde van a estar nuestras plantillas. Esta URL hay que crearla en el mismo directorio y será selector.component.html
  templateUrl: './header.component.html',

//standalone es una nueva característica de angular frente a los módulos. El standalone simplifica todo. De momento, lo dejaremos en true.
  standalone: true,
  imports: [RouterOutlet],
//Como es de esperar, ahora toca darle un poco de estilo al componente...
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = 'tutorial-angular';
}