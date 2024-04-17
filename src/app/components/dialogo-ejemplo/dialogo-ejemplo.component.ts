import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo-ejemplo',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './dialogo-ejemplo.component.html',
  styleUrl: './dialogo-ejemplo.component.scss'
})
export class DialogoEjemploComponent {

}
