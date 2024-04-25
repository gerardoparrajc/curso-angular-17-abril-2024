import { HttpInterceptorFn } from '@angular/common/http';

export const miInterceptorInterceptor: HttpInterceptorFn = (req, next) => {

  const peticion = req.clone({
    headers: req.headers.append('curso-angular', 'ejercicio-interceptores')
  });

  return next(peticion);
};
