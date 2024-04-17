import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EjemploDragDropComponent } from './components/ejemplo-drag-drop/ejemplo-drag-drop.component';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    EjemploDragDropComponent,
    MatButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mi-primer-proyecto';


}
