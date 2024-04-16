import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.scss'
})
export class HijoComponent {
  @Output() emisor: EventEmitter<string> = new EventEmitter();

  nombre: string = 'Nombre inicial';

  enviarNombre() {
    this.emisor.emit(this.nombre);
  }
}
