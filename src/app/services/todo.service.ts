import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTasks() {
    const tasks: Todo[] = [
      { id: 1, nombre: 'Hacer las camas', hecho: false },
      { id: 2, nombre: 'Preparar café', hecho: false },
      { id: 3, nombre: 'Poner el lavavajillas', hecho: true },
      { id: 4, nombre: 'Pedir la comida', hecho: false },
      { id: 5, nombre: 'Recoger a los niños del colegio', hecho: true },
    ];

    return of(tasks).pipe(
      delay(1500)
    );
  }
}
