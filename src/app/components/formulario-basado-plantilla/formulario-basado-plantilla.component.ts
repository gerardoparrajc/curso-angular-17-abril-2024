import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario-basado-plantilla',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario-basado-plantilla.component.html',
  styleUrl: './formulario-basado-plantilla.component.scss'
})
export class FormularioBasadoPlantillaComponent {
  nombre: string = '';
  correo: string = '';

  enviarFormulario(formulario: NgForm) {
    console.log(formulario);

  }
}
