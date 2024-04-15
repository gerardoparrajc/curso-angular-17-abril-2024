import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MiSegundoComponenteComponent } from './components/mi-segundo-componente/mi-segundo-componente.component';

@Component({
  selector: 'kit-raiz',
  standalone: true,
  imports: [RouterOutlet, MiSegundoComponenteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Hola mundo';
  nombreSaludo = 'Antonio';
}
