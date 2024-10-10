import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-ejercicio-10',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ejercicio-10.component.html',
  styleUrl: './ejercicio-10.component.css'
})
export class Ejercicio10Component 
{

  public array:number[]=[1,2,3,4,5,6,7,8,9,10];
  public temporal:number[]=[];

  constructor(){
    // ESTO ES MARAVILLOSO, PURO JSCRIPT, NO HAY QUE RECORRER NADA.
    this.temporal=this.array.slice().reverse();
  }


}
