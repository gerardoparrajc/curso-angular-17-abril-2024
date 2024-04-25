import { CommonModule, registerLocaleData } from '@angular/common';
import { Component, LOCALE_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ]
})
export class AppComponent {
  fecha: Date = new Date();
}
