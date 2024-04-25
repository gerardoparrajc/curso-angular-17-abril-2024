import { Routes } from '@angular/router';
import { RecetasComponent } from './components/recetas/recetas.component';
import { IngredientesComponent } from './components/ingredientes/ingredientes.component';
import { RutaNoEncontradaComponent } from './components/ruta-no-encontrada/ruta-no-encontrada.component';
import { RecetaComponent } from './components/receta/receta.component';

export const routes: Routes = [
  { path: 'recetas', component: RecetasComponent },
  { path: 'receta/:nombre', component: RecetaComponent, children: [
    { path: 'ingredientes', component: IngredientesComponent }
  ]},
  { path: '', redirectTo: '/recetas', pathMatch: 'full' },
  { path: '**', component: RutaNoEncontradaComponent }
];
