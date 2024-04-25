import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-ingredientes',
  standalone: true,
  imports: [],
  templateUrl: './ingredientes.component.html',
  styleUrl: './ingredientes.component.scss'
})
export class IngredientesComponent implements OnInit {

  receta: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.route.parent?.params.subscribe(
        (params: Params) => this.receta = params['nombre']
      )
  }

}
