import { Component } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';
import { Hijo2Component } from '../hijo-2/hijo-2.component';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent, Hijo2Component],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.scss'
})
export class PadreComponent {
  nombreRecibidoDeHijo1: string = '';

  manejadorEmisor(nombre: string) {
    this.nombreRecibidoDeHijo1 = nombre;
  }
}
