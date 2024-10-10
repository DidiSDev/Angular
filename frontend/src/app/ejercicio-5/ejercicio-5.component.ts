import { Component } from '@angular/core';
import { personaEjercicio4 } from '../../models/personaEjercicio4';

@Component({
  selector: 'app-ejercicio-5',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio-5.component.html',
  styleUrl: './ejercicio-5.component.css'
})
export class Ejercicio5Component {

  public persona!: personaEjercicio4;

  constructor()
  {

  }
  onClick() 
  {
    this.persona = new personaEjercicio4('Diego', 'Díaz', 'Díaz', 30, 'Técnico superior DAM');
    if (this.persona.nombre == this.persona.apellido1)
    {
        alert ('¡NOMBRE Y APELLIDO 1: IGUALES!');
    }
    if (this.persona.apellido1 == this.persona.apellido2)
    {
        alert ('¡APELLIDO 1 Y APELLIDO 2: IGUALES!');
    }
  }

}
