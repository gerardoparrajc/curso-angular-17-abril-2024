import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MiPrimerServicioService } from '../../services/mi-primer-servicio.service';

@Component({
  selector: 'app-mi-primer-componente',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mi-primer-componente.component.html',
  styleUrl: './mi-primer-componente.component.scss'
})
export class MiPrimerComponenteComponent {
  nombre: string = 'Felipe';

  constructor(private servicio: MiPrimerServicioService) {

  }

  cambiarNombre() {
    this.nombre = 'Antonio';
    this.servicio.saludar();
  }
}
