import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente1Component } from './components/componente1/componente1.component';
import { Componente2Component } from './components/componente2/componente2.component';

@Component({
  selector: 'kit-raiz',
  standalone: true,
  imports: [RouterOutlet, Componente1Component, Componente2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Hola mundo';
}
