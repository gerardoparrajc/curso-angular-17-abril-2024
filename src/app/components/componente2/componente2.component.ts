import { Component, inject } from '@angular/core';
import { ServicioService } from '../../services/servicio.service';

@Component({
  selector: 'app-componente2',
  standalone: true,
  imports: [],
  templateUrl: './componente2.component.html',
  styleUrl: './componente2.component.scss'
})
export class Componente2Component {
  constructor() {
    this.servicio = inject(ServicioService);
  }

  dato: string = '';
  private servicio!: ServicioService;

  solicitarDato() {
    this.dato = this.servicio.getInformacion();
  }
}
