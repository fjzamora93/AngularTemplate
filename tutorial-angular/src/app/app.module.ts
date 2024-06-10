/**
 * Los módulos de Ángular son un enfoque que ya no se utiliza demasiado pero que aún así
 * vamos a edejar por escrito para que entendamos cómo funcionan.
 * 
 * Para más información, consultar :
 *      tutorial_modules.txt
 */

/** 
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { appConfig } from './app.config';
    import { AppComponent } from './app.component';
    import { HeaderComponent } from './header/header.component';

    bootstrapApplication(AppComponent, appConfig)
    .catch((err) => console.error(err));

    //!Y llamamos a esta función para que aparezca en pantalla.
    bootstrapApplication(HeaderComponent, appConfig)
    @NgModule({
        //!Aquí importaremos los componentes que vayamos creando y que NO SEAN modules (por ejemplo, el componente AppComponent, después migrarlo para que deje de ser standalone)
        declarations: [
            AppComponent,
            HeaderComponent,
            UserComponent,
            CardComponent,
            TaskComponent,
            TasksComponent,
            NewTaskComponent,
        ],
        //!Aquí importaremos los componentes que vayamos creando y que sean MODULE o STANDALONE (los standalone también pueden ir aquí) 
        //!(por ejemplo, vamos a convertir CardComponent en un módulo llamado SharedModule)
        imports: [
            BrowserModule,
            FormsModule,
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

*/