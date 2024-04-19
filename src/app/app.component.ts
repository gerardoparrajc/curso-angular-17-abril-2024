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
export class AppComponent implements OnInit {
  title = 'Hola mundo';

  constructor(private miServicio: MiServicioService) {}

  ngOnInit(): void {

      this.miServicio.getPromesa()
      .then((result) => {
        console.log('El resultado es menor que 5: ' + result);
      })
      .catch((error) => console.log(error))
      .finally(() => console.log('Se ha terminado la ejecución'));

      this.miServicio.getProducts()
        .then((productos: any) => {
          console.log(productos);
        })
        .catch((error) => alert('Se ha producido un error'))
        .finally(() => console.log('Petición finalizada'));

  }

}
