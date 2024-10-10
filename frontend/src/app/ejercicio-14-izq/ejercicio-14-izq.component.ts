import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-ejercicio-14-izq',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ejercicio-14-izq.component.html',
  styleUrl: './ejercicio-14-izq.component.css'
})
export class Ejercicio14IzqComponent {

  public palabra!:string;
  public arrayAcumulador:string[]=[];
  @Output()propagar = new EventEmitter<string[]>(); 

  constructor()
  {
      
  }
  Enviar()
  {
    if (this.palabra=='' || this.palabra==null)
    {
      alert("Escribe algo");
    }
    else
    {
      this.arrayAcumulador.push(this.palabra);
      this.propagar.emit(this.arrayAcumulador);
      this.palabra="";
    }
    
  }
}
