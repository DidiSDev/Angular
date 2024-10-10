import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-ejercicio-1',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './ejercicio-1.component.html',
  styleUrl: './ejercicio-1.component.css'
})
export class Ejercicio1Component {

  //EL SÍMBOLO DE ADMIRACIÓN HACE QUE NO TENGAS QUE OBLIGATORIAMENTE DARLE EL VALOR: ""
  public textoEscrito!:string;

  constructor()
  {

  }
  onClick()
  {
    alert(this.textoEscrito);
    //LIMPIO EL CONTENIDO DE LA CAJITA DESPUÉS DE MOSTRARLO:
    this.textoEscrito='';

  }
}
