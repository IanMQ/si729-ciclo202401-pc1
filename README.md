# Guía de Desarrollo para la PC1 de Open Source (SI729)

## Indice
   
  - [Enunciado : Caso HATCHSQUARE Technologies LLC.](#enunciado-)
  - [Restricciones técnicas:](#restricciones-técnicas)
    - [Requirimientos del Equipo](#requirimientos-del-equipo)
    - [Fuera del alcance](#fuera-del-alcance-)
    - [Referencias](#referencias-)
    - [Calificación](#calificación)
  - [Guía de Desarrollo:](#guía-de-desarrollo)
    - [Primeros pasos](#primeros-pasos)
    - [Orden de Carpetas](#orden-de-carpetas)
    - [Creación de Componentes](#creación-de-componentes)
      - [Header y Footer](#header-y-footer-)
      - [Countries](#countries)      


## Enunciado 

Caso HATCHSQUARE Technologies LLC.  

Su cliente, Hatchsquare Technologies, LLC. Desea promover el uso de su plataforma 
Calendarific (https://calendarific.com/), un RESTful API de alcance mundial, fácil de 
usar para desarrolladores que brinda acceso a celebraciones y días festivos públicos, 
locales y bancarios; abarca más de 230 países, más de 3300 estados y más de 100 idiomas.   

Para ello, le solicita elaborar una aplicación web que obtenga la información de los países 
(countries) para los posee información, accediendo 
al endpoint:  https://calendarific.com/api/v2/countries  
La documentación del API se encuentra en: https://calendarific.com/api-documentation  

Para el desarrollo web de lado web frontend, se ha seleccionado TypeScript como lenguaje de 
programación y Angular como Frontend Framework.  Se le encarga el desarrollo de una 
aplicación web que implemente las siguientes características: 

- La aplicación debe presentar en la parte superior un Toolbar, 
con el título “Supported Countries” 

- La aplicación debe presentar como vista por defecto un conjunto de cards donde para 
cada card presente la información disponible para el país (country), incluyendo 
country name, iso-3166, total holidays, supported languages, uuid, flag unicode.  

- La aplicación debe presentar en la parte inferior, una sección de footer con la 
información “Copyright © 2024 HATCHSQUARE Technologies LLC, All rights reserved.” 
en la primera línea. Además debe incluir en la segunda línea del footer la 
información “Developed by“ y los datos del Developer (considérese 
a usted como autor, indicando código, nombre y apellido.)

El equipo de IT de su cliente tomará en cuenta no sólo el cumplimiento de las 
características funcionales, sino el diseño de interfaz de usuario, así como la 
estructura del proyecto, aplicación de convenciones de nomenclatura de objetos de 
programación en inglés, convenciones de nomenclatura de Angular, organización y 
eficiencia del código. Igualmente se tomará en cuenta la aplicación de patrones 
de diseño. Se toma en cuenta accessibility (imágenes con texto alternativo, uso de 
ARIA attributes) y usability. 

## Restricciones técnicas:

### Requirimientos del Equipo:

- Interfaz de usuario basada en Angular Material, mientras que para la 
comunicación con el backend debe apoyarse en HttpClient 
(incluido en @angular/common/http). 
- Debe incluir ARIA atributes en las vistas. 
- La interfaz de usuario debe mostrar los textos en inglés. 
- El proyecto de aplicación debe poder aperturarse sin problemas en JetBrains WebStorm.

### Fuera del alcance: 
- Sidebar 
- Internationalization 
- Routing 

### Referencias: 
- https://calendarific.com/  
- https://angular.io/guide/http 
- https://material.angular.io/components/toolbar/overview  
- https://material.angular.io/components/toolbar/overview#accessibility 
- https://material.angular.io/components/grid-list/overview 
- https://material.angular.io/components/grid-list/overview#accessibility 
- https://material.angular.io/components/card/overview 
- https://material.angular.io/components/card/overview#accessibility  
- https://www.w3.org/TR/wai-aria/#usage   

### Calificación:

| Criterio de Calificación  | Requisitos                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Puntaje |
|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| C01. Building y ejecución | Al abrir el proyecto y ordenar la ejecución, ésta se inicia sin problemas. La aplicación es accesible en la ruta indicada.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | 2.0     |
| C02. User Interface       | Se evidencia que la interfaz de usuario aplica Responsive Web Design. La interfaz cumple con las características solicitadas para la estructura, elementos de la interfaz de usuario.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | 3.0     |
| C03. Features             | La vista cumple de forma completa con los requisitos de interfaz de usuario, con todas las características y restricciones indicadas en el enunciado. Se cumple que la información es recuperada desde el endpoint solicitado.                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | 7.0     |
| C04. Code Organization    | El desarrollador organiza el código y los elementos de frontend de la solución, aplicando buenas prácticas de TypeScript y Angular, agrupando los elementos de la solución según convenciones, manteniendo organización de paquetes y carpetas recomendadas por el fabricante y buenas prácticas de la industria de software, bajo un enfoque domain-driven, cumpliendo con las restricciones técnicas sobre organización.                                                                                                                                                                                                                                                                          | 3.0     |
| C05. Code Quality         | Utiliza para el frontend el lenguaje de programación TypeScript, el framework Angular y cumple con las restricciones técnicas indicadas. La codificación tiene un estilo claro, indentando los bloques de código según los estándares de programación correspondientes al lenguaje, aplicando una lógica consistente en los métodos, condicionales sin escenarios no contemplados, uso adecuado de reutilización de código para evitar redundancia. Aplica patrones de arquitectura y patrones de diseño. Distribuye el código en los niveles correspondientes, asignando lógica de persistencia, lógica de negocio, lógica de control, y transferencia a las interfaces y clases que corresponden. | 3.0     |
| C06. Naming Standards     | El desarrollador aplica en todos los nombres de objetos de programación como paquetes, componentes, interfaces, clases, objetos, variables, constantes y métodos la nomenclatura en inglés y la nomenclatura estándar para identificadores de clases, objetos, miembros de programación, así como los recursos.                                                                                                                                                                                                                                                                                                                                                                                     | 2.0     |

## Guía de Desarrollo:

### Primeros pasos

Para el desarrollo de este proyecto usaremos JetBrains WebStorm, un IDE para JavaScript y 
TypeScript.

Por lo que comenzaremos creando un proyecto nuevo en WebStorm, seleccionando la opción de 
Angular y TypeScript.

<img src="guide_assets/ss1_newproject.PNG" alt="">

Con el proyecto creado, procederemos a instalar Angular Material. Para ello, abrimos la 
terminal de WebStorm y ejecutamos el siguiente comando:

```bash 
ng add @angular/material
```
Luego de ejecutar el comando, se nos presentará una serie de opciones para configurar 
Angular Material. Seleccionamos las opciones que mejor se adapten a nuestro proyecto. 
En este caso, seleccionaremos la opción de tema predefinido y la opción de incluir animaciones.

```bash
✔ Choose a prebuilt theme name, or "custom" for a custom theme: [your choice] 
✔ Set up global Angular Material typography styles? Yes
```
### Orden de Carpetas

La estructura de carpetas del proyecto debe seguir un orden lógico y organizado. 
A continuación, se presenta una posible estructura de carpetas:

```
src
├── app
│   ├── countries
│   ├── public
│   └── shared
└── enviroments    
```
### Creación de Componentes
Para crear los componentes necesarios para el proyecto, utilizaremos el comando `ng g c` que 
es lo mismo que `ng generate component` de Angular CLI. 

#### Header y Footer 
A continuación, crearemos los componentes más sencillos:

```bash
>>Click derecho en public
>>Open in terminal

ng g c header
ng g c footer
```

Ahora nos dirigimos a app.component.html, borramos su contenido y agregamos los componentes creados:

```html
<app-header></app-header>

<app-footer></app-footer>
```

Luego de crearlos nos daremos que un problema que afecta a nuestros componentes es el siguiente:
```bash
Only standalone components can use imports
```
Por lo que para resolverlo debemos irnos a los archivos header.component.ts y footer.component.ts y
agregar la propiedad `standalone: true` en el decorador `@Component`. 
```typescript
//Ejemplo footer.component.ts
@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  standalone: true, //<-- Agregar esta línea
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor() { }
}
```

Seguido de esto nos dirigimos a `app.component.ts` y hacemos unos cambios para que pueda funcionar
correctamente el header y footer. 
```typescript
//Lineas a agregar
import {HeaderComponent} from './public/header/header.component';
import {FooterComponent} from './public/footer/footer.component';

imports: [RouterOutlet, HeaderComponent, FooterComponent]
```

Con los componentes conectados, solo quedaría darle un diseño a ambos componentes.

<img src="guide_assets/ss2_header&footer.PNG" alt="">

Para conseguir este resultado se modificaron:

```
header.component.html
header.component.css

footer.component.html
footer.component.css

app.component.html
app.component.css
```
### Countries

Para trabajar con la sección Countries, necesitamos establecer ota division en las carpetas.

```
src
├── app
│   ├── countries
│   │   ├── components
│   │   ├── entities
│   │   └── services
...    
└── enviroments  
```

comenzamos por entender la estructura de la API, para ello nos dirigimos a la documentación de la API y
revisamos el endpoint de countries. 
```bash
https://calendarific.com/api-documentation
```
Para nuestro caso, obtendremos nuestar apikey y usaremos el siguiente endpoint
```bash
https://calendarific.com/api/v2/countries?api_key=baa9dc110aa712sd3a9fa2a3dwb6c01d4c875950dc32vs
```
con esto nos vamos a la carpeta enviroments y creamos un archivo llamado `enviroment.ts` dentro de
el agregamos lo siguiente:

```typescript
export const enviroment = {
  production: false,
  api: 'https://calendarific.com/api/v2/countries?api_key=nSOeTmlyh7Gy7Jygj4yQZyyj348LWz70'
}
```

Con esto listo deberiamos darle un vistazo a la estructura en la que viene la información
proveniente de este endpoint:

```json
{
  "meta": {
    "code": 200    
  },
  "response": {
    "url": "https://calendarific.com/supported-countries",
    "countries": [
      {
        "country_name": "Afghanistan",
        "iso-3166": "AF",
        "total_holidays": 24,
        "supported_languages": 2,
        "uuid": "f0357a3f154bc2ffe2bff55055457068",
        "flag_unicode": "🇦🇫"
      }
    ]
  }
}
```
Luego de tener una idea de la estructura de la API, creamos un servicio para poder
obtener la información de los países. Para ello, nos dirigimos a la carpeta `services` y
creamos un archivo llamado `countries.service.ts` y dentro de este agregamos lo siguiente:

```
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/environments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private apiUrl = enviroment.api;

  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get<any>(this.apiUrl);
  }
}
```

con esto listo, creamos un archivo dentro de services llamado `countries.service.spec.ts` 
y dentro de este agregamos lo siguiente:

```typescript
import { TestBed } from '@angular/core/testing';
import {CountriesService} from './countries.service';

describe('CountriesService', () => {
  let service: CountriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
```
Para finalizar con el desarrollo de la sección services, necesitamos habilitar el modulo de HttpClient,
para eso nos dirijimos a `app.config.ts` y dentro de este agregamos lo siguiente:

```
import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(HttpClientModule) // Agregar esta línea
  ]
};
```

Con un servicio que nos permita extraer la información de la API, ahora creamos un
entity para poder manejar la información de los países. Para ello, nos dirigimos a la
carpeta `entities` y creamos un archivo llamado `country.entity.ts` y dentro de este:

Para este caso tenemos una versión simplificada de la entidad que funciona si los atributos
son los mismos que los de la API. Lo llamaremos V1 :

```typescript
export class Country {
  country_name: string;
  iso_3166: string;
  total_holidays: number;
  supported_languages: number;
  uuid: string;
  flag_unicode: string;
}
```
Para nuestro caso usaremos una versión más compleja de la entidad, que nos permite 
manejar la información de los países de una forma más flexible y adecuada a la api con la
que trabajamos. Lo llamaremos V2 :

```typescript
export class Country {
  country_name: string;
  iso_3166: string;
  total_holidays: number;
  supported_languages: number;
  uuid: string;
  flag_unicode: string;

  constructor(
    country_name: string = "",
    iso_3166: string = "",
    total_holidays: number = 0,
    supported_languages: number = 0,
    uuid: string = "",
    flag_unicode: string = ""
  ) {
    this.country_name = country_name;
    this.iso_3166 = iso_3166;
    this.total_holidays = total_holidays;
    this.supported_languages = supported_languages;
    this.uuid = uuid;
    this.flag_unicode = flag_unicode;
  }

  // Método estático para mapear un objeto JSON a una instancia de Country
  static fromJson(json: any): Country {
    return new Country(
      json["country_name"] || "",
      json["iso-3166"] || "", //Esta versión considera que el campo puede venir con guiones
      json["total_holidays"] || 0,
      json["supported_languages"] || 0,
      json["uuid"] || "",
      json["flag_unicode"] || ""
    );
  }
}
```

Por ultimo faltaria crear un componente para poder mostrar la información de los países.
Para ello, nos dirigimos a la carpeta `components` y creamos un componente de la siguiente forma:

```bash
>selecionamos la carpeta countries/components
ng g c country-cards
```

Comenzamos por establecer la estructura del componente, asi que nos dirigimos a
`country-cards.component.ts` y dentro de este agregamos lo siguiente:

Este sería la estructura básica del componente que trabaja con la V1 de la entidad:

```
import {Component, OnInit} from '@angular/core';
import {CountriesService} from '../../services/countries.service';
import {DecimalPipe, NgForOf} from '@angular/common';
import {Country} from '../../entities/country.entity';

@Component({
  selector: 'app-country-cards',
  templateUrl: './country-cards.component.html',
  imports: [
    DecimalPipe,
    NgForOf
  ],
  standalone: true,
  styleUrl: './country-cards.component.css'
})
export class CountryCardsComponent implements OnInit {
  data: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  ngOnInit() {
    this.getCountries();
  }

  private getCountries() {
    this.countriesService.getCountries().subscribe(
      (result ) => {
        this.data = result.response.countries;
      },
      (error) => {
        console.error('Error fetching countries:', error);
      }
    );
  }
}
}
```
Para trabajar con la V2 de la entidad tendriamos que hacer un ligero cambio dentro del componente:
```
private getCountries() {
    this.countriesService.getCountries().subscribe(
      (result ) => {
        this.data = result.response.countries.map((json: any) => Country.fromJson(json));
      },
      (error) => {
        console.error('Error fetching countries:', error);
      }
    );
    }
```
Con esto listo, ahora nos dirigimos a `country-cards.component.html` y dentro de este
agregamos lo siguiente:

```
<div class="cards-container">
  <div class="card" *ngFor="let country of data">
    <h2>{{ country.country_name }} ({{ country.iso_3166 }})</h2>
    <p><strong>Total Holidays:</strong> {{ country.total_holidays }}</p>
    <p><strong>Supported Languages:</strong> {{ country.supported_languages }}</p>
    <p><strong>UUID:</strong> {{ country.uuid }}</p>
    <p><strong>Flag:</strong> {{ country.flag_unicode }}</p>
  </div>
</div>
```
Los estilos para el componente se encuentran dentro de `country-cards.component.css` y esos
van a discreción del desarrollador, pero para conseguir un resultado similar al de la imagen
se recomienda usar lo siguiente:

```
.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px;
}

.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  width: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.card h2 {
  margin: 0 0 8px;
}

.card p {
  margin: 4px 0;
}
```










