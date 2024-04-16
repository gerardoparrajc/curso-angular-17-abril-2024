import { Component } from '@angular/core';
import { HijosModule } from '../hijos/hijos.module';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijosModule],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.scss'
})
export class PadreComponent {
  nombreRecibidoDeHijo1: string = '';

  manejadorEmisor(nombre: string) {
    this.nombreRecibidoDeHijo1 = nombre;
  }
}
