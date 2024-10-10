import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-ejercicio-9',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ejercicio-9.component.html',
  styleUrl: './ejercicio-9.component.css'
})
export class Ejercicio9Component {


  public variableVista!:number;
  public variablePreestablecida:number=7;
  public distintas!:boolean;
  
  constructor()
  {

  }

}
