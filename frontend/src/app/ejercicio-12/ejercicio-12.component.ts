import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-ejercicio-12',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ejercicio-12.component.html',
  styleUrl: './ejercicio-12.component.css'
})
export class Ejercicio12Component {

  public color!:string;
  public nuevoColor!:string;
  constructor()
  {

  }
  cambiarColor()
  {
    //INTERCAMBIO VARIABLES, NO PUEDO USAR LA MISMA SI USO UN MÉTODO EN CLICK
    this.nuevoColor=this.color;
  }
}
