import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mi-segundo-componente',
  standalone: true,
  imports: [],
  templateUrl: './mi-segundo-componente.component.html',
  styleUrl: './mi-segundo-componente.component.scss'
})
export class MiSegundoComponenteComponent {
  @Input() nombre: string = '';
}
