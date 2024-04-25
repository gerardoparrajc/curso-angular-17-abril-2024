import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';

export const miResolverResolver: ResolveFn<boolean> = (route, state): any => {
  const http = inject(HttpClient);

  return http.get('https://dummyjson.com/recipes');
};
