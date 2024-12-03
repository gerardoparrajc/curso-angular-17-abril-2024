import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { todoReducers } from './state/reducers/items.reducers';
import { TodosEffects } from './state/effects/items.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({
      todos: todoReducers
    }),
    provideEffects([TodosEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};
