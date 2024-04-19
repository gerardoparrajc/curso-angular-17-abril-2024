import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MiServicioService } from './services/mi-servicio.service';

@Component({
  selector: 'kit-raiz',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  constructor() {

    // 1. Llamar al método getDirectUsers


    // 2. Llamar al método getUsersByPromise


    // 3. Llamar al método getUsersByObservable


  }


}
