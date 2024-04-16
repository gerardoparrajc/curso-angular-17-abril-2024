import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo-2',
  standalone: true,
  imports: [],
  templateUrl: './hijo-2.component.html',
  styleUrl: './hijo-2.component.scss'
})
export class Hijo2Component {
  @Input() nombreRecibido: string = '';
}
