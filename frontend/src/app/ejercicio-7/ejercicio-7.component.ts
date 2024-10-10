import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-ejercicio-7',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ejercicio-7.component.html',
  styleUrl: './ejercicio-7.component.css'
})
export class Ejercicio7Component {


  public ciudades:string[]=["Madrid", "Salamanca", "Bilbao", "Pontevedra"];
  public cantidad!:number;
  public repeticiones:number=0;
  constructor()
  {}

  public onClick()
  {
    // NECESITO DOS VARIABLES PORQUE SI DEJO SOLAMENTE CANTIDAD, NADA MÁS LA ESCRIBE EL USUARIO SE EJECUTA DIRECTAMENTE
    this.repeticiones=this.cantidad;

  }

}
