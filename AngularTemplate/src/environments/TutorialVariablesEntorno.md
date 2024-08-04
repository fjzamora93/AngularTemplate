# Manejar variables de entorno en un proyecto de angular

### 1. Directorio src/environments

Ve a la carpeta src/environments y crea un archivo llamado environment.ts en caso de que no exista.
Normalmente angular debería crearlo por defecto.

Dentro de este directorio debería haber dos archivos: environment.ts y environment.prod.ts.

Estos archivos deberían verse así:

```typescript
// environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  // otras variables de entorno
};

// environment.prod.ts
export const environment = {
  production: true,
  apiUrl: 'https://api.example.com',
  // otras variables de entorno
};
```


### 2. Configurar Angular CLI para Reemplazar Archivos

Edita angular.json:

Abre el archivo angular.json en el directorio raíz de tu proyecto.

Busca la sección projects -> [tu-proyecto] -> architect -> build -> configurations.

Añade la configuración para reemplazar los archivos de entorno en el archivo angular.json bajo fileReplacements. Si no existe la sección fileReplacements, puedes agregarla manualmente.

```json
    "configurations": {
        "production": {
            "fileReplacements": [
            {
                "replace": "src/environments/environment.ts",
                "with": "src/environments/environment.prod.ts"
            }
            ],
            "budgets": [
            {
                "type": "initial",
                "maximumWarning": "500kB",
                "maximumError": "1MB"
            },
            {
                "type": "anyComponentStyle",
                "maximumWarning": "2kB",
                "maximumError": "4kB"
            }
            ],
            "outputHashing": "all"
        },
        "staging": {
            "fileReplacements": [
            {
                "replace": "src/environments/environment.ts",
                "with": "src/environments/environment.staging.ts"
            }
            ],
            "optimization": false,
            "sourceMap": true
        }
        },
        "defaultConfiguration": "production"

```

### 3. Usar Variables de Entorno en Angular

Simplemnete iremos a los servicios o compomentes que utilicen las variables de entorno y podremos remplazar libremente dichas variables. Por ejemplo:

```typescript
    import { environment } from '../environments/environment';

    @Injectable({
    providedIn: 'root'
    })
    export class CsrfService {
        private csrfToken: string | null = null;
        constructor(private http: HttpClient) {}
        apiUrl = environment.apiUrl;

    // Obtiene el token CSRF del servidor
    getCsrfToken(): Observable<string> {
        return this.http.get<{ csrfToken: string }>(`${this.apiUrl}/csrf-token`, { withCredentials: true }).pipe(
        tap(response => {
            this.csrfToken = response.csrfToken;
            console.log('CSRF Token received:', this.csrfToken);
        }),
        map(response => response.csrfToken),
        catchError(error => {
            console.error('Error fetching CSRF token:', error);
            return of(''); // Retorna un observable con un token vacío en caso de error
        })
        );
    }

    // Obtiene los encabezados HTTP necesarios para las solicitudes
    getHeaders(): Observable<HttpHeaders> {
        return this.getCsrfToken().pipe(
        map(token => new HttpHeaders({
            'Content-Type': 'application/json',
            'X-CSRF-Token': token
        }))
        );
    }

    // Método para obtener el token CSRF almacenado
    getToken(): string | null {
        console.log('CSRF Token in service:', this.csrfToken);
        return this.csrfToken;
    }
    }
```