import { Component } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {

  public marketing:Boolean;
  public empleado:Empleado
  //DEFINIMOS ATRIBUTO 
  public trabajadores:Array<Empleado>;
  public valorSeleccionado:string;
  constructor()
  {
    this.empleado=new Empleado("David López",45,"Cocinero",true);
      this.marketing=true;
      //INSTANCIAMOS ATRIBUTO ANTERIOR DE ARRAY
      this.trabajadores=[new Empleado('Manolo Martinez', 45, 'Cocinero', true),  
        new Empleado ('Ana López', 45, 'Cocinera', false), 
        new Empleado ('Víctor Robles', 45, 'Programador', true)];


        this.valorSeleccionado='perro';
  }
}
