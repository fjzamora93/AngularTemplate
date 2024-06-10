INJECTABLE es el decorador que se utiliza para que la instancia de una clase esté disponible
en todas los componentes de una aplicación.

Para crear esta clase "inyectable", deberemos seguir los siguientes pasos:


1. Importación. Importamos Inject e Injectable.
    Injectable es para la clase que vamos a injectar.
    Inject es para los que van a recibir dicha clase (aunque hay formas alternativas al Inject)
    
        import { Inject, Injectable } from '@angular/core';

2. Usar el decorador @Injectable({ providedIn: 'root' }) 
    directamente en nuestro servicio. Por ejemplo:

    En el archivo task.service.ts, quedaría así:

        @Injectable({ providedIn: 'root' }) 
        export class TaskService {
                ...
                //resto del código
                ...
        }

3. 'Inyectar' la clase en los componentes que vayan a utilizar dicha clase.
    Para inyectar una clase en un componente, podemos usar estas dos sintaxis: 

        constructor(private taskService: TaskService){}

    o bien esta otra:

        private taskService = inject(TaskService)

Al hacer esto, simplemente, nos aseguraremos de que nuestra isntancia esté disponible para todos los componentes.


CONSIDERACIONES:

Un inyectable puede ser especialmente útil si de antemano ya conocemos el objeto
con el que vamos a trabajar y ahí dentro hay agrupadas una serie de atributos y métodos.

Creo que puede ser más útil utilizarlo en fases tempranas. 

En caso de funcionar "emitiendo" y "recibiendo" señales, habrá que cambiar toda la arquitectura.

Pues donde antes se recibía una señal, ahora habrá que usar el constructor designado, 
lo que obligará a ir refactorizando poco a poco.