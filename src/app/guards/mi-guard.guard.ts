import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const miGuardGuard: CanActivateFn = (route, state) => {
  const secreto = route.queryParams['clave'];
  if (secreto === '123456789') {
    return true;
  } else {
    const router: Router = inject(Router);
    router.navigate(['404']);
    return false;
  }
};
