# Directivas

**NOTA IMPORTANTE**
Las directivas tienen dos usos fundamentales, si no se le va a dar estos usos, es mejor prescindir de ellas:

1. Utilizar la misma directiva para VARIOS componentes y no REPETIR comportamientos.

2. Encapsular comportamientos complejos de un componente, y así separar la parte lógica de la funcional.

=============================================================================================================

En Angular, una directiva es una clase que agrega comportamiento adicional a los elementos en tu plantilla. Ante todo, por dentro son muy similares a los componentes (ya que pueden recibir @input, @output, etc), aunque en realidad forman parte de los atributos de algún componente. No es habitual que vayamos a usar nuestras propias directivas, aunque puntualmente es posible que decidamos hacerlo.

El nombre del archivo de nuestra directiva será el siguiente:

nombre.directive.ts

    o

ng g c nombreDirective

```typescript
    import { Directive, ElementRef, OnInit } from '@angular/core';

    @Directive({
    selector: '[appHighlight]'
    })

    export class HighlightDirective implements OnInit {
    constructor(private el: ElementRef) { }

    ngOnInit() {
        this.el.nativeElement.style.backgroundColor = 'yellow';
    }
    }
```


En este código, @Directive es un decorador que marca la clase como una directiva Angular y proporciona metadatos de configuración. El selector appHighlight es cómo usarás la directiva en tu plantilla.

ElementRef es un servicio que otorga acceso directo al elemento DOM en la plantilla. En el método ngOnInit, cambiamos el color de fondo del elemento a amarillo.

Ahora, vamos a usar la directiva appHighlight en un componente:


```typescript

    import { Component } from '@angular/core';

    @Component({
        selector: 'app-my-component'
    })

    /* 
        <h1>My Component</h1>
        <p appHighlight>Este párrafo será resaltado.</p> 
    */


```


## Directiva con Input y con Host

Pero lo interesante de las directivas es que son dinámicas ya que pueden recibir inputs o inlcuso pueden acceder a los atributos del HOST.
Por ejemplo, pueden detectar si se ha realizado click dentro de un host, o cualquier cambio.

import { Directive, ElementRef, Input, OnInit } from '@angular/core';

```typescript
    @Directive({
    selector: '[appHighlight]',
    host: {
        '(click)' : 'activarFuncion()'
    }
    })
    export class HighlightDirective implements OnInit {
        @Input() appHighlight: string;

        constructor(private el: ElementRef) { }

        ngOnChange(changes: SimpleChanges) {
            if (changes['appHighlith']){ //Fíjate que va con corchetes y comillas
                console.log(changes, " + " , this.appHighlith);
                this.el.nativeElement.style.backgroundColor = this.appHighlight;
        }

        activarFuncion(){
            const wantsToLeave: windows.confirm('¿Quieres salir?');
            if (wantsToLeave){
                return
            }
        }

    }

```
Entonces, si buscásemos en el HTML del componente que tiene esta directiva podríamos ver esto:
(Y aquí suponemos que color es un atributo del componente, que puede ir cambiando desde otra parte del componente o desde un Output de un hijo).

```html
    <p [appHighlight]="color">Este párrafo será resaltado en rojo.</p>
    <button appClickEmitter (appClickEmitter)="cambioColor()">Haz clic en mí</button>
```

Como explicábamos al principio, el principal uso de las directivas es no repetir código. Por lo que para proyectos pequeños, esto no debería ser necesario.