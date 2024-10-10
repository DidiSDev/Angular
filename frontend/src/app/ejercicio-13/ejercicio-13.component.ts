import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-ejercicio-13',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ejercicio-13.component.html',
  styleUrl: './ejercicio-13.component.css'
})
export class Ejercicio13Component {

  public color!:string;
  public colorActual!:string;
  constructor()
  {
      
  }
  
   cambiarColor()
   {
      if (this.color!=this.colorActual)
      {
        this.colorActual=this.color;
      }
      else
      {
        alert("¡IGUALES!");
      }
   }
  
}
