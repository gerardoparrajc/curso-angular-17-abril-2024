import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PadreComponent } from './components/padre/padre.component';

@Component({
  selector: 'kit-raiz',
  standalone: true,
  imports: [RouterOutlet, PadreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Hola mundo';
  nombreSaludo = 'Antonio';
}
