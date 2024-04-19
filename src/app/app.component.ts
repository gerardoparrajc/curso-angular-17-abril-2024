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

  constructor(private miServicio: MiServicioService) {

    this.miServicio.getTodos().subscribe({
      next: (response: any) => console.log(response),
      error: (error) => console.log(error),
    });

    this.miServicio.addTodo('Lavar el coche', false, 8).subscribe({
      next: (response: any) => console.log(response),
      error: (error) => console.log(error)
    });

    this.miServicio.updateStatusTodo(82, true).subscribe({
      next: (response: any) => console.log(response),
      error: (error) => console.log(error),
    });

    this.miServicio.deleteTodo(92).subscribe({
      next: (response: any) => console.log(response),
      error: (error) => console.log(error)
    });

  }


}
