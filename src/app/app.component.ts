import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GatoBotasDirective } from './directives/gato-botas.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GatoBotasDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mi-primer-proyecto';
}
