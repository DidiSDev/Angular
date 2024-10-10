import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-ejercicio-8',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ejercicio-8.component.html',
  styleUrl: './ejercicio-8.component.css'
})
export class Ejercicio8Component {

  public numeroIntroducido!:number; 
  public arrayNumeros:number[]=[1,2,3,4,5,6,7,8,9,10];

  constructor()
  {
   
  }


}
