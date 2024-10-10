import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-ejercicio-2',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './ejercicio-2.component.html',
  styleUrl: './ejercicio-2.component.css'
})
export class Ejercicio2Component {


  public array=["posición0","posición1", "posición2", "posición3"];
  public mensaje:any="";
  constructor()
  {

  }
  mostrarArray()
  {
    //EL FOR EN ANGULAR ES CON LET, No con int o number
    for (let i=0;i<this.array.length;i++)
    {
      //AÑADIMOS A LA VARIABLE MENSAJE CADA NUEVA POSICIÓN DEL ARRAY, SUMÁNDOLA A LO ANTERIORMENTE YA ESCRITO PARA MOSTRARLO TRAS PULSAR EL BOTÓN
      if (i<this.array.length-1)
      {
        this.mensaje=this.mensaje+this.array[i]+", ";
      }
      else
      {
        this.mensaje=this.mensaje+this.array[i];
      }
        
    }
  }

  borrarArray()
  {
    //CREAMOS ESTE MÉTODO PARA QUE NO SE ACUMULE EL TEXTO EN EL ARRAY SI PULSAMOS VARIAS VECES MOSTRAR ARRAY.
    this.mensaje="";
  }
}
