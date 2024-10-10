import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {

  mensaje:any;
  @Output()propagar = new EventEmitter<string>(); 
  //clase que permite emitir eventos desde un componente hijo


  constructor()
  {

  }
  onPropagar()
  {
    this.propagar.emit(this.mensaje); //Método emit de la clase EventEmitter que nos permite enviar,
    //en nuestro caso mensaje
    //1. el hijo emite un evento que es escuchado por el padre al hacer click en "propagar"
  }

  

}
