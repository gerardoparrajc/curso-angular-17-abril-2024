import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MiPrimerComponenteComponent } from './components/mi-primer-componente/mi-primer-componente.component';

@Component({
  selector: 'kit-raiz',
  standalone: true,
  imports: [RouterOutlet, MiPrimerComponenteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Hola mundo';
}
