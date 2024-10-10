import { Component } from '@angular/core';
import { persona } from '../../models/persona';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-ejercicio-6',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio-6.component.html',
  styleUrl: './ejercicio-6.component.css'
})
export class Ejercicio6Component {

  public persona!:persona;
  public empleado!:Empleado;

  constructor()
  {
    this.persona=new persona('Diego', 30, 'Funcionario');
    this.empleado=new Empleado('Diego', 29, 'Funcionario', true);
  }
  onClick()
  {
      if (this.persona.nombre == this.empleado.nombre)
      {
        alert ('Nombre de "persona" y de "empleado" SON IGUALES!! '+this.persona.nombre);
      }
      if (this.persona.edad == this.empleado.edad)
      {
        alert ('La edad en "persona" y en "empleado" SON IGUALES!!');
      }
      if (this.persona.estudios==this.empleado.cargo)
      {
        alert ('Los estudios de "persona" y el cargo de "empleado" SON IGUALES!! '+ this.persona.estudios);
      }
  }
}
