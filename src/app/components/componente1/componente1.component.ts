import { Component } from '@angular/core';
import { ServicioService } from '../../services/servicio.service';

@Component({
  selector: 'app-componente1',
  standalone: true,
  imports: [],
  templateUrl: './componente1.component.html',
  styleUrl: './componente1.component.scss'
})
export class Componente1Component {

  constructor(private servicio: ServicioService) {}

  guardarDato() {
    this.servicio.setInformacion('Esta información es privada');
  }

}
