import { Component } from '@angular/core';
import { Ejercicio14IzqComponent } from '../ejercicio-14-izq/ejercicio-14-izq.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-ejercicio-14-dch',
  standalone: true,
  imports: [Ejercicio14IzqComponent,FormsModule,CommonModule],
  templateUrl: './ejercicio-14-dch.component.html',
  styleUrl: './ejercicio-14-dch.component.css'
})
export class Ejercicio14DchComponent {

  public arrayTraido:string[]=[];

  constructor()
  {

  }

  procesandoPropagacion(mensaje:string[])
  {
      this.arrayTraido=mensaje;
  }
}
