import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ejercicio15IzqComponent } from "../ejercicio-15-izq/ejercicio-15-izq.component";
@Component({
  selector: 'app-ejercicio-15-dch',
  standalone: true,
  imports: [Ejercicio15IzqComponent,CommonModule,FormsModule],
  templateUrl: './ejercicio-15-dch.component.html',
  styleUrl: './ejercicio-15-dch.component.css'
})
export class Ejercicio15DchComponent {

   public arrayNumeros:number[]=[];

  constructor()
  {

  }
  procesandoPropagacion(dato:number[])
  {
    this.arrayNumeros=dato;
  }
}
