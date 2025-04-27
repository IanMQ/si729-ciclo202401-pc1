# Guía de Desarrollo para la PC1 de Open Source (SI729)

## Indice
   
  - [Enunciado : Caso HATCHSQUARE Technologies LLC.](#enunciado-)
  - [Restricciones técnicas:](#restricciones-técnicas)
    - [Requirimientos del Equipo](#requirimientos-del-equipo)
    - [Fuera del alcance](#fuera-del-alcance-)
    - [Referencias](#referencias-)
    - [Calificación](#calificación)
  - [Guía de Desarrollo:](#guía-de-desarrollo)


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

[Vista de New Project](guide_assets/ss1_newproject.PNG)

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

[Vista de Header & Footer](guide_assets/ss2_header&footer.PNG)

Para conseguir este resultado se modificaron:

```
header.component.html
header.component.css

footer.component.html
footer.component.css

app.component.html
app.component.css
```





