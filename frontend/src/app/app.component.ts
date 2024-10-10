import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrincipalComponent } from "./principal/principal.component";
import { EmpleadoComponent } from './empleado/empleado.component';
import { FormularioComponent } from "./formulario/formulario.component";
import { PuebloComponent } from "./pueblo/pueblo.component";
import { PadreComponent } from "./padre/padre.component";
import { Ejercicio1Component } from "./ejercicio-1/ejercicio-1.component";
import { Ejercicio2Component } from "./ejercicio-2/ejercicio-2.component";
import { Ejercicio3Component } from "./ejercicio-3/ejercicio-3.component";
import { Ejercicio4Component } from "./ejercicio-4/ejercicio-4.component";
import { Ejercicio5Component } from "./ejercicio-5/ejercicio-5.component";
import { Ejercicio6Component } from "./ejercicio-6/ejercicio-6.component";
import { Ejercicio7Component } from "./ejercicio-7/ejercicio-7.component";
import { Ejercicio8Component } from "./ejercicio-8/ejercicio-8.component";
import { Ejercicio9Component } from "./ejercicio-9/ejercicio-9.component";
import { Ejercicio10Component } from "./ejercicio-10/ejercicio-10.component";
import { Ejercicio11Component } from "./ejercicio-11/ejercicio-11.component";
import { Ejercicio12Component } from "./ejercicio-12/ejercicio-12.component";
import { Ejercicio13Component } from "./ejercicio-13/ejercicio-13.component";
import { Ejercicio14DchComponent } from "./ejercicio-14-dch/ejercicio-14-dch.component";
import { Ejercicio15DchComponent } from "./ejercicio-15-dch/ejercicio-15-dch.component";
import { Ejercicio15IzqComponent } from "./ejercicio-15-izq/ejercicio-15-izq.component";

//1º LO PRIMERO ES IMPORTAR EL COMPONENTE QUE QUEREMOS

//a los componentes se les llama a traves de las etiquetas del decorador
//si cambiamos el nombre app-root a cualquier otra cosa, ya no cargará el localhost:4200
//WEB SPA es una página que carga distintas funcionalidades.
@Component({
  selector: 'app-root',
  standalone: true,
  //2º AQUI DEBAJO METEMOS EL PruebaComponent importado arriba
  //FINALMENTE EL SIGUIENTE PASO ES FIJARME EN LA ETIQUETA DEL SELECTOR DE "nombre.component.ts"
  imports: [RouterOutlet, PrincipalComponent, EmpleadoComponent, FormularioComponent, PuebloComponent, PadreComponent, Ejercicio1Component, Ejercicio2Component, Ejercicio3Component, Ejercicio4Component, Ejercicio5Component, Ejercicio6Component, Ejercicio7Component, Ejercicio8Component, Ejercicio9Component, Ejercicio10Component, Ejercicio11Component, Ejercicio12Component, Ejercicio13Component, Ejercicio14DchComponent, Ejercicio15DchComponent, Ejercicio15IzqComponent],
  //AL PARECER DA UN ERROR SI DEJAS ESPACIOS ENTRE LOS IMPORTS, MEJOR NO DEJARLO POR SI ACASO.
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
