import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-receta',
  standalone: true,
  imports: [],
  templateUrl: './receta.component.html',
  styleUrl: './receta.component.scss',
})
export class RecetaComponent implements OnInit {
  nombre: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.nombre = this.route.snapshot.params['nombre'];

    this.route.params.subscribe(
      (parametros: Params) => (this.nombre = parametros['nombre'])
    );

    this.route.queryParams.subscribe({
      next: (queryParams: Params) => console.log(queryParams)
    });

    this.route.fragment.subscribe(
      (fragment: any) => console.log(fragment)
    )
  }
}
