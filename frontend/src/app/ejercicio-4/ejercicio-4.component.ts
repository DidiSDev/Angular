import { Component } from '@angular/core';
import { personaEjercicio4 } from '../../models/personaEjercicio4';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-ejercicio-4',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './ejercicio-4.component.html',
    styleUrls: ['./ejercicio-4.component.css'] 
})
export class Ejercicio4Component {
    public resultado!: string;
    public persona: personaEjercicio4; 
  nombreIgualApellido1: boolean;
  apellido1IgualApellido2: boolean;

    constructor() {
     
        this.persona = new personaEjercicio4('Diego', 'Díaz', 'Díaz', 30, 'Técnico superior DAM');

        // EN ESTE CASO DABA UN ERROR AL COMPARAR CADENAS, ASÍ QUE HAGO UN BOOLEANO QUE ME DIGA TRUE O FALSE
        // EN FUNCIÓN DE LA COMPARACIÓN DIRECTA, DE FORMA AUTOMÁTICA ELEGIRÁ TRUE O FALSE ASÍ SOLAMENTE TENGO
        // QUE MOSTRAR LAS VARIABLES BOOLEANAS
        this.nombreIgualApellido1 = this.persona.nombre == this.persona.apellido1;
        this.apellido1IgualApellido2 = this.persona.apellido1 == this.persona.apellido2;
    }
}
