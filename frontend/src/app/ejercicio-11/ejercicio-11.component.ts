import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-ejercicio-11',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ejercicio-11.component.html',
  styleUrl: './ejercicio-11.component.css'
})
export class Ejercicio11Component {

  public array:number[]=[1,2,3,4,5,6,7,8,9,10];
  public dato!:string;
  public temporal:number[]=[];
  public contador!:number;
  public error!:string;
  constructor()
  {

  }

  limpiar()
  {
    this.temporal=[];
    this.error="";
  }
  metodo()
  {
    this.contador=0;
      this.temporal=[];
      
      if (this.dato.toLowerCase()==="par")
      {
         for (let i in this.array)
         {
          if (this.array[i]%2==0)
          {
            // LO QUE HAGO ES RECORRER SI LA PALABRA ES PAR Y TODOS LOS NUMEROS % 2 QUE SON LOS PARES LOS METO EN EL TEMPORAL
            //DONDE AUMENTO EL CONTADOR AL FINAL, TRAS AÑADIR.
            this.temporal[this.contador]=this.array[i];
            this.contador++;
          }
         }
      }
      else if (this.dato.toLowerCase()==="impar")
      {
        for (let i in this.array)
        {
          if (this.array[i]%2!=0)
          {
            this.temporal[this.contador]=this.array[i];
            this.contador++;
          }
        }
      }
      else
      {
        this.error="Error!!, escribe par o impar";
      }
  }
}
