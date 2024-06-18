# 1 Es necesario hacer un despliegue de angular, los pasos están descritos aquí: https://angular.dev/tools/cli
    
## Paso 1. Tener instalado nodejs. Node es una dependencia de Angular.
        Descargar e instalar Node.js LTS version:
        https://nodejs.org/en/download/prebuilt-installer

    
    
## Paso 2. Instalar angular/cli

    En una terminal de windows, ejecutar el siguiente comando:
        
            npm install -g @angular/cli

            o

            npm install //para instalar todas las dependencias
    
## Paso 3. Crear un nuevo proyecto

     Navegas hasta la carpeta en la que quieres crear un nuevo proyecto con la consola del bash, y ahí ejecutas el siguiente comando:
        
            ng new nombre-del-proyecto

    Después de ejecutar eso, quizás se te hará algunas preguntas. En este punto no es importante lo que respondas. 
    Si todo ha salido con éxito, el proyecto se habrá desplegado correctamente.


# 2 Configurando Visual Studio Code.

    -Exntensión: Angular Language Service
    -Extensión: Angular Essentials (Version 17 de John Papa)

# 3 Previsualización del proyecto.
    
    Desde la línea de comandos integrada de Visual Studio, podemos empezar a hacer cosas antes de trabajar.

        npm start 

    Este comando es el equivalente al runserver, para correr el servidor y ver lo que estamos haciendo aquí:

        http://localhost:4200/
        
    Si todo se ha creado correctamente y visitas la url propuesta, debería verse algo.
    Es posible que si algo está fallando en este punto se deba al path. También es posible reiniciar el Visual Studio.
    Para interrumpir el servidor, basta con usar el siguiente comando:

        ctrl + c

# 4 Instalación de las dependencias (package)

    Navega hasta la carpeta del proyecto y asegúrate de tener instaladas todas las dependencias.
    Para instalar las dependencias, bastará con usar el siguietne comando:

        npm install
    
    Esto solo será necesario hacerlo una vez para tener instaladas todas las dependencias.

# 5 CREACIÓN DE COMPONENTES

    ng g c nombreComponente
    ng g c directorio/componente --skip-tests

    