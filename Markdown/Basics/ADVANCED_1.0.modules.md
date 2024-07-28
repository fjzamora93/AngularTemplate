# Módulo vs Standlone

El módulo es la alternativa al Standalone. Es más propio de proyectos grandes. Un módulo de Angular es un contenedor para los diferentes partes de una aplicación. Podríamos decir que dentro del módulo todo queda "empaquetado".

Module y Standalone se pueden intercalar (un module puede tener standalone y viceversa).
Pero hay que tener una serie de consideraciones al respecto.

Estos son los pasos que tenemos que seguir a la hora de entender los módulos:
 
1. El archivo main.ts es el punto de entrada de la aplicación. 
    En él se importa el módulo raíz de la aplicación. Aquí debemos cambiar por completo la estructura 
    que estábamos manejando en el standalone (el código de main.ts son unas pocas líneas, no habrá problema).
  
2. A continuación crearemos un app.modules.ts que será el módulo raíz de la aplicación.

3. Dentro de este módulo, debemos tener en cuenta dos consideraciones:
        [imports]: se refieren a los standalone que vayamos a ir importando.
        [declarations]: se refieren a los modules que vayamos a traer a este módulo.

4. Para "migrar" un standalone y convertirlo en un "module" hay tres pasos:

    a. Poner en 'false' o eliminar la propiedad de 'standalone'.
    b. Quitar cualquier import que esté usando el standalone, ya que los imports son algo exclusivo del standalone.
    c. Añadir el 'import' que hemos quitado e incluirlo en el module raíz (app.module).

    Por ejemplo:

        @Component({
            selector: 'app-task',
            standalone: true,                       ->      FALSE
            templateUrl: './task.component.html',
            styleUrl: './task.component.css',
            imports: [CardComponent, DatePipe]      ->      ELIMINAR. LO IMPORTAMOS DESDE app.module.ts
        })

    En este punto, el import lo trasladaríamos al imports de app.module.ts.
    Pero recordamos, los imports son solamente para StandAlone. 
    En caso de que a su vez quisiéramos migrar en cascada cada componente, 
    Tendríamos que irnos al componente correspondiente (en este caso CardComponent)
    y a su vez convertirlo en un module (poniendo en false y eliminando sus imports).
    Este proceso puede repetirse en cascada varias veces.
    

5. Incluir el componente que estemos migrando en DECLARATION y asegurarnos de que no está en IMPORTS.

    