

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

//Aquí importaremos los componentes que vayamos creando
import { HeaderComponent } from './app/header/header.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

//Y llamamos a esta función para que aparezca en pantalla.
bootstrapApplication(HeaderComponent, appConfig)


//!CÓMO QUEDARÍA EL CÓDIGO EN CASO DE USAR MÓDULOS:

/**
 * import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';  
 * import { AppModule } from './app/app.module';
 * 
 * platformBrowserDynamic().bootstrapModule(AppModule);
 * 
 */


//!Y hasta aquí el documento main.ts