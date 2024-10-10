import { Component } from '@angular/core';
import { persona } from '../../models/persona';
@Component({
  selector: 'app-ejercicio-3',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio-3.component.html',
  styleUrl: './ejercicio-3.component.css'
})
export class Ejercicio3Component {

  public persona!:persona;

  constructor()
  {
    //ESTO SE MOSTRARÁ EN EL .HTML
    this.persona =new persona("Diego", 29, 'Licenciatura');
  }
}
