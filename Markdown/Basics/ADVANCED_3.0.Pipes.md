# Uso de pipes en Angular

Muy resumidamente, los pipes son una herramienta de formatear texto (o algún elemento del DOM) en Angular.

El comando para crear un pipe es el siguiente:

    >>ng generate pipe pipe_name

Que automáticamente nos generará la estructura de un Pipe:

```typescript
    import { Pipe, PipeTransform } fro  m '@angular/core';

    @Pipe({
    name: 'lowercase',
    standalone: true
    })
    export class LowercasePipe implements PipeTransform {

        transform(value: unknown, ...args: unknown[]): unknown {
            return null;
        }
    }
```


En Angular, los "pipes" son una característica poderosa y flexible utilizada para transformar datos en plantillas. A continuación se detallan los principales usos de los pipes en Angular:

    Transformación de Datos:
        Formateo de Fechas: Los pipes permiten transformar fechas en formatos legibles. Ejemplo: {{ fecha | date:'dd/MM/yyyy' }}
        Formateo de Números: Incluyendo decimales y porcentajes. Ejemplo: {{ cantidad | number:'1.2-2' }}
        Formateo de Moneda: Para mostrar valores numéricos como monedas. Ejemplo: {{ precio | currency:'USD':true:'1.2-2' }}

    Manipulación de Textos:
        Cambio de Mayúsculas/Minúsculas: Convertir texto a mayúsculas o minúsculas. Ejemplo: {{ texto | uppercase }}
        Truncar Texto: Pipes personalizados pueden truncar texto a una longitud específica.

    Transformación de Listas:
        Filtro de Listas: Aunque Angular recomienda hacer esto en el componente por razones de rendimiento, se pueden usar pipes para filtrar listas en plantillas. Ejemplo: {{ lista | filter:criterio }}
        Ordenar Listas: Similar a los filtros, se puede ordenar listas utilizando pipes personalizados. Ejemplo: {{ lista | orderBy:'campo' }}

    Internacionalización (i18n):
        Traducción de Textos: Utilizando pipes para traducir cadenas de texto según el idioma seleccionado.

    Personalización:
        Pipes Personalizados: Los desarrolladores pueden crear sus propios pipes para manejar transformaciones específicas que no están cubiertas por los pipes integrados.

    Pipes Asíncronos:
        Manejo de Promesas y Observables: El async pipe es especialmente útil para suscribirse automáticamente a observables y promesas y reflejar los valores resultantes en la plantilla. Ejemplo: {{ observableData | async }}


```typescript

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'customPipe'})
export class CustomPipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {
    // Lógica de transformación personalizada
    return transformedValue;
  }
}


```