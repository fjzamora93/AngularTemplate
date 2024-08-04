# Angular Material

Existe una serie de componentes prefabricados por parte del equipo de Angular que podemos utilizar directamente en nuestra aplicación. Estos componentes pueden quitar parte del trabajo de tener que estar con el CSS y el estilo. Para usar estos componentes en primer lugar necesitaremos instalar el módulo:

```bash
    #COMANDO ANTIGUO
    npm install @angular/material 

    #COMANDO NUEVO - para las últimas versiones
    ng add @angular/material
```


Si ahora vamos a nuestro archivo angular.json veremos la siguiente línea de estilos:

```json
      "styles": [
              "node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css",
              "src/styles.css"
            ],

```

Lo que importa es que si ahora vamos a la siguiente ruta ( node_modules/@angular/material/prebuilt-themes), podremos ver y elegir algunos de los temas prefabricados. Para elegir otro estilo diferente, simplemente tenemos que cambiar la línea de código del documento json anterior.

Estos son algunos de los estilos disponibles:

- deeppurple-amber.css
- indigo-pink.css
- pink-bluegrey.css
- purple-green.css
- deeppurple-amber.css

Lo más probable es que tengas que reiniciar tu servidor para que los cambios surtan efecto.


### Importación del material

Acto seguido, ya podremos insertar en nuestro código dichos materiales, ya que para ahorrar espacio no están por defecto en nuestra aplicación. 

Si estamos atrabajando con una aplicación creada con Standalone components, será necesario crear un módulo específico para todos nuestros materiales, tal que así:

>> material/material.module.ts

Dentro de esta carpeta, importaremos todos los materiales que nos interesen y los exportaremos a cada uno de los comoponentes donde queramos utilizarlos.


```typescript
// material.module.ts
    import { NgModule } from '@angular/core';
    import { MatInputModule } from '@angular/material/input';
    import { MatCardModule } from '@angular/material/card';
    import { MatButtonModule } from '@angular/material/button';
    import { MatToolbarModule } from '@angular/material/toolbar';
    import { MatExpansionModule } from '@angular/material/expansion';

    @NgModule({
    imports: [
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatExpansionModule
    ],
    exports: [
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatExpansionModule
    ]
    })
    export class MaterialModule { }

```

Y dentro de cada componente STANDALONE que queramos utilizar estos materiales, simplemente importamos el módulo creado anteriormente:

```typescript
// Componente standalone: app.component.ts

    import { MaterialModule } from './material/material.module'; // Ruta al módulo de Material

    @Component({
        selector: 'app-root',
        standalone: true,
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        imports: [MaterialModule]
        })
        export class AppComponent {
        title = 'bakeryAppFront';
    }

```
Tras seguir estos pasos, el material estará disponible para su uso en cada componente que lo haya importado.
