import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recetas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recetas.component.html',
  styleUrl: './recetas.component.scss'
})
export class RecetasComponent implements OnInit {

  recetas: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.route.data.subscribe((datos: any) => this.recetas = datos.recetas.recipes);
  }

}
