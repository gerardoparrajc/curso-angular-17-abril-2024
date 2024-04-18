import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordsValidator } from '../../validators/passwordsValidator';

@Component({
  selector: 'app-formulario-reactivo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario-reactivo.component.html',
  styleUrl: './formulario-reactivo.component.scss'
})
export class FormularioReactivoComponent {

  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', Validators.required),
      correo: new FormControl('', [Validators.required, Validators.email, Validators.minLength(4)]),
      password: new FormControl('', Validators.required),
      repitePassword: new FormControl('', Validators.required)
    }, {
      validators: passwordsValidator
    });
  }

  enviarFormulario() {
    console.log('Enviando formulario...');
    console.log(this.formulario);
  }

  getPassword(): FormControl {
    return this.formulario.get('password') as FormControl;
  }

  getRepitePassword(): FormControl {
    return this.formulario.get('repitePassword') as FormControl;
  }



}
