import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GatoBotasDirective } from './directives/gato-botas.directive';
import { FondoVerdeClickDirective } from './directives/fondo-verde-click.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GatoBotasDirective, FondoVerdeClickDirective, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mi-primer-proyecto';
  colorFondo = 'red';

  ciudades = ['Almería', 'Granada', 'Madrid', 'Cartagena', 'Logroño'];


  productos = [
    { nombre: 'Leche', stock: 23},
    { nombre: 'Pan', stock: 4},
    { nombre: 'Yogurt', stock: 63},
    { nombre: 'Huevos', stock: 13},
    { nombre: 'Carne', stock: 76},
  ]

}
