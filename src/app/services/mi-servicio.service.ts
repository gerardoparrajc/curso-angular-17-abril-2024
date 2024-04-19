import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {

  constructor(private http: HttpClient) { }

  getPromesa() {
    const miPromesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 10);
        if (randomNumber < 5) {
          resolve(randomNumber);
        } else {
          reject('El numero es mayor que 5 ' + randomNumber);
        }
      }, 5000);
    });

    return miPromesa;
  }

  getProducts() {
    return firstValueFrom(this.http.get('https://dummyjson.com/products'));
  }

  getRecetas() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .pipe(map((posts: any, indice) => {
        for (const post of posts) {
          post.title = post.title.toUpperCase();
        }
        return posts;
      }));
  }

}
