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

  private token: string = '';
  public recetas: any;

  constructor(private miServicio: MiServicioService) {
  }

  doLogin() {
    this.miServicio.login().subscribe({
      next: (datosLogin: any) => this.token = datosLogin.token,
      error: (error) => console.log(error)
    });
  }

  doLoadRecipes() {
    this.miServicio.getSecretRecipes(this.token).subscribe({
      next: (recetas: any) => console.log(recetas),
      error: (error) => console.log(error)
    });
  }
}
