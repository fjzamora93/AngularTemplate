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

### 1. Habilitar gh-pages
Habilitar gh-pages desde github.
Y asegurarte de que esta es la página que se utiliza.
Si por lo que sea utilizas la máster, aparecer la página por defecto de Angular.

### 2. Compilación 
Compilar en tu github:

    npm run build -- --base-href "https://<tu-usuario>.github.io/<tu-repo>/"
    
En este caso:

    npm run build -- --base-href "https://fjzamora93.github.io/AngularTutorial/"
    
Después procedemos a instalar Angular Globalmente (solo la primera vez)

    npm install -g angular-cli-ghpages


### 3. Despliegue del proyecto

Para desplegar el proyecto usaremos este comando:

    npx angular-cli-ghpages --dir=dist/<nombre-directorio-local>/browser

En este último paso remplazza <nombre-directorio> por el nombre de lo que se haya generado dentro de la carpeta dist, que puede coger un nombre random.

**!!!IMPORATNTE:** tienes que poner como ruta después del dist/ exactamente el directorio en el que esté el index. Si se te han generado 200 mierdas por el camino, pon la ruta hast aque llegues al directorio donde está tu index.

Eso quiere decir que a veces la ruta será esta:
    npx angular-cli-ghpages --dir=dist/mi-proyecto

Y otras veces será esta:
    npx angular-cli-ghpages --dir=dist/mi-proyecto/browser

Solamente asegúrate que la que ejecutes tiene dentro el index, que es lo que va a coger gh-pages.


### 4. Verificación de errores

Una vez estás allí, asegúrate de que las rutas que hay dentro no son locales..por ejemplo:

LA SIGUIENTE VA A DAR ERROR (no va a cargar todo, solo una parte): 
    <base href="F:/Git/InvestCalculator/">

En su lugar utiliza esta:
    <base href="/InvestCalculator/">

## Despliegue en Railway

Para despliegue en Railway sin complicaciones, puedes conectar directamente con la página publicada en la rama de gh-pages. Esto generará menos problemas que intentar hacer el build directamente desde la rama master de github.
