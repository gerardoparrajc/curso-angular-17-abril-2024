import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mi-primer-componente',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mi-primer-componente.component.html',
  styleUrl: './mi-primer-componente.component.scss'
})
export class MiPrimerComponenteComponent {
  nombre: string = 'Felipe';

  cambiarNombre() {
    this.nombre = 'Antonio';
  }
}
