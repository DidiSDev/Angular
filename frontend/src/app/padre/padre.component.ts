import { Component } from '@angular/core';
import { HijoComponent } from "../hijo/hijo.component";

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {

  public textoPadre!:string;

  constructor()
  {

  }
  procesaPropagar(mensaje:string) //2. El padre escucha el evento, recibiendo el valor
  //que el componente hijo le envía. DESPUÉS el valor recibido se almacena en la variable textoPadre
  {
    this.textoPadre=mensaje;
  }
}
