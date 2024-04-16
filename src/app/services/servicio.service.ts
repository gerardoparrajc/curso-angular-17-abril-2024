import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private informacion: string = 'Texto de inicio';

  constructor() { }

  setInformacion(value: string) {
    this.informacion = value;
  }

  getInformacion(): string {
    return this.informacion;
  }
}
