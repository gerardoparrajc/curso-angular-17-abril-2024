import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.scss'
})
export class HijoComponent {
  @Input() nombre: string = '';
  @Input() apellidos: string = '';

  @Output() grito: EventEmitter<string> = new EventEmitter();

  gritar() {
    this.grito.emit(`${this.nombre} ${this.apellidos}`);
  }
}
