# Incapsulation

permite que el css de un componente sea global. NO es tan habitual como el host.

ViewEncapsulation.Emulated (por defecto): Los estilos se encapsulan de manera que solo afecten al componente en el que están definidos, pero sin usar Shadow DOM. Angular logra esto emulando un Shadow DOM mediante el prefijo de los estilos con un atributo único.

ViewEncapsulation.None: No hay encapsulación de estilos. Los estilos definidos en el componente afectan a todo el documento, es decir, son globales.

ViewEncapsulation.ShadowDom: Utiliza Shadow DOM nativo para encapsular los estilos, asegurando que los estilos de un componente no afecten a otros.

# Host 

HostBinding: Permite enlazar propiedades del componente al elemento host. (video 113)

```typescript
    selector: 'app-control',
    host {
        class: 'control'
    }
```

Automáticamente, el selector quedaría así:
```html
<app-control class='control'>
```

Pero realmente nosotros ya habríamos añadido la clase por antelación, así que no sería necesario.


# CONCEPTOS FUNDAMENTALES (DE MÁS IMPORTANTE A MENOS IMPORTANTE)

# 0. Deploying Angular Apps - CSR, SSR, SGA
**CSR:** La renderización del lado del cliente se refiere a que el renderizado de la página se realiza en el navegador del usuario.
**SSR:** La renderización del lado del servidor implica que la página se renderiza en el servidor antes de ser enviada al cliente, mejorando el SEO y la carga inicial.
**SGA:** Las aplicaciones de una sola página (SPA) cargan una sola página HTML y actualizan dinámicamente el contenido sin recargar la página completa.
Estos conceptos son importantes para entender las estrategias de renderizado y cómo afectan el rendimiento y la SEO de la aplicación, pero pueden ser considerados en etapas posteriores del aprendizaje.

## 1. Services & Dependency Injection
**Importancia**: Muy alta
**Descripción:** Los servicios en Angular son una manera de compartir datos y lógica entre diferentes componentes. La inyección de dependencias (Dependency Injection, DI) es un patrón de diseño utilizado para implementar la inversa de control (IoC), permitiendo que las clases declaren sus dependencias que serán inyectadas en tiempo de ejecución. Este concepto es fundamental para escribir código modular, reutilizable y testable.


##  2. RxJS - observables
**Importancia:** Muy alta
**Descripción:** RxJS (Reactive Extensions for JavaScript) proporciona herramientas para trabajar con flujos de datos asincrónicos y eventos, utilizando Observables. En Angular, RxJS es fundamental para manejar operaciones asíncronas como eventos de usuario, peticiones HTTP y temporizadores. Comprender RxJS es esencial para manejar correctamente la programación reactiva en Angular.

## 3. HTTP Request & handeling responses
**Importancia:** Alta
**Descripción:** Realizar solicitudes HTTP y manejar las respuestas es una parte crítica de casi cualquier aplicación web. Angular proporciona el módulo HttpClient para simplificar estas tareas. Entender cómo hacer peticiones HTTP, manejar errores y trabajar con datos de servidores externos es crucial para el desarrollo de aplicaciones Angular.

## 4. Enhancing Elements with Directives
**Importancia:** Alta
**Descripción:** Las directivas en Angular permiten modificar el comportamiento de los elementos del DOM. Existen directivas estructurales (como *ngIf, *ngFor) y directivas de atributo (como ngClass, ngStyle). Saber cómo utilizar y crear directivas es importante para manipular y extender el comportamiento de los elementos HTML en Angular.

## 5. Transforming Values with Pipes
**Importancia:** Media
**Descripción:** Las pipes en Angular se utilizan para transformar datos en plantillas. Se aplican mediante el uso del operador | y permiten transformar datos como fechas, monedas, y otros formatos. Aunque no es tan crítico como otros conceptos, conocer y utilizar pipes puede mejorar significativamente la presentación de datos en una aplicación Angular.

# 6. Code splittling & Deferrable views
**Importancia**: Media
**Descripción**: La división de código (code splitting) y las vistas diferibles permiten optimizar la carga y el rendimiento de una aplicación Angular. Esto se logra cargando módulos y componentes sólo cuando son necesarios (lazy loading). Es especialmente útil para grandes aplicaciones, pero puede considerarse un concepto más avanzado una vez que se dominan los fundamentos.

