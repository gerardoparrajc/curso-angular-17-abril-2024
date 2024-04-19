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

  async ngOnInit() {

    try {
      const numero = await this.miServicio.getPromesa();
      console.log('El número es menor que 5: ' + numero);
    } catch (error) {
      console.log(error);
    }

    try {
      const productos = await this.miServicio.getProducts();
      console.log(productos);
    } catch (error) {
      alert('Se ha producido un error al obtener los prodcutos');
    }

  }

}
