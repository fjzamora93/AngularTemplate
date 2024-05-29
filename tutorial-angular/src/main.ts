

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

//Aquí importaremos los componentes que vayamos creando
import { HeaderComponent } from './app/header.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

//Y llamamos a esta función para que aparezca en pantalla.
bootstrapApplication(HeaderComponent, appConfig)