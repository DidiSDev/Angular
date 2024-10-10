import { Component } from '@angular/core';
import { SecundarioComponent } from '../secundario/secundario.component';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [SecundarioComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  
  public nombre:String="David";
  public edad:Number=20;
  public mayorDeEdad:boolean =true;
  public trabajos:Array<String>=['Carpintero', 'Albañil', 'Fontanero'];
  public empleado:Empleado; 

  holaMundo(){
    // alert('Hola mundo');
  }

  constructor(){
    console.log(this.trabajos);
    console.log(this.nombre);
    console.log(this.edad);

    this.empleado=new Empleado('David', 40, "RRHH", true);
  
  }

  ngOnInit(){
    this.holaMundo();
    this.cambiarEdad(52);
    // alert(this.nombre+ " "+this.edad);
    this.cambiarEdad(26);
    console.log(this.edad);
  }
  cambiarEdad(edad:number){
    this.edad=edad;
  }
}
