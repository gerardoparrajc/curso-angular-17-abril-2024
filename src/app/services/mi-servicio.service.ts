import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MiServicioService {

  constructor(private http: HttpClient) {}

  login() {
    return this.http.post('https://dummyjson.com/auth/login', {
      username: 'kminchelle',
      password: '0lelplR'
    });
  }

  getSecretRecipes(token: string) {
    return this.http.get('https://dummyjson.com/auth/recipes', {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    });
  }

  getTodos() {
    return this.http.get('https://dummyjson.com/todos');
  }

  addTodo(titulo: string, completado: boolean, idUsuario: number) {
    return this.http.post('https://dummyjson.com/todos/add', {
      todo: titulo,
      completed: completado,
      userId: idUsuario
    });
  }

  updateStatusTodo(id: number, completado: boolean) {
    return this.http.put(`https://dummyjson.com/todos/${id}`, {
      completed: completado
    });
  }

  deleteTodo(id: number) {
    return this.http.delete(`https://dummyjson.com/todos/${id}`);
  }
}
