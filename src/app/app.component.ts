import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private router: Router) {

  }

  redireccionar(destino: string) {
    this.router.navigate([`/${destino}`]);
  }

  cargarReceta(nombreReceta: string, tipo: string = '', variedad: string = '', socarrat: boolean = false) {
    this.router.navigate([`/receta`, nombreReceta], {
      queryParams: {
        tipo: tipo,
        variedad: variedad
      },
      fragment: socarrat ? 'socarrat' : ''
    });
  }

}
