import { Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ejercicio15DchComponent } from "../ejercicio-15-dch/ejercicio-15-dch.component";
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-ejercicio-15-izq',
  standalone: true,
  imports: [CommonModule, FormsModule, Ejercicio15DchComponent],
  templateUrl: './ejercicio-15-izq.component.html',
  styleUrl: './ejercicio-15-izq.component.css'
})
export class Ejercicio15IzqComponent {

  public numero:number[]=[];
  public palabra:string[]=[];
  public dato:any='';
  @Output()propagar = new EventEmitter<number[]>(); 


  constructor()
  {

  }
  metodo()
  {
    if (!isNaN(Number(this.dato)))
    {
      this.numero.push(this.dato);
      this.propagar.emit(this.numero);
    }
    else
    {
      this.palabra.push(this.dato);
    }
    this.dato='';
  }
}
