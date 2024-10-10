import { Component } from '@angular/core';
import { PuebloComponent } from "../pueblo/pueblo.component";

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [PuebloComponent],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  public ciudadQueEnvio : string="Milán";

  constructor()
  {

  }
  //ngOnInit es para lanzar métodos desde el componente
  ngOnInit():void{}
}
