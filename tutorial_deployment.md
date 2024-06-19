# Despliegue de un proyecto de Angular

## 1.Compilación del código básica

```powershell
    ng build
```

*o bien este otro:*

```powershell
    npm run build
```

Cuando el proceso termine, encontraremos una carpeta que se llamará así:

    dist/routing
        |_browser

Ahí debería estar dentro lo que vamos a desplegar, con todo lo que podemos colgar en la web. Veremos que tiene una estructura un poco distinta.

Esta sería la forma básica... Que básicamente es una compilación del código que puedes utilizar como si se tratase de una página web estática, y la puedes lanzar en cualquier servidor de web estática, (lo que lo hace ideal para aplicaciones muy ligeras o que no van a requerir muchos recursos)


## Despliegue en github-pages



Compilar en tu github:

    npm run build -- --base-href "https://<tu-usuario>.github.io/<tu-repo>/"
    
En este caso:

    npm run build -- --base-href "https://fjzamora93.github.io/AngularTutorial/"
    

Instalar Angular Globalmente:

    npm install -g angular-cli-ghpages