import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MiPrimerServicioService {

  constructor() { }

  saludar() {
    console.log('Hola mundo');
  }
}
