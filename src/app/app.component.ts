import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioReactivoComponent } from './components/formulario-reactivo/formulario-reactivo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormularioReactivoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
