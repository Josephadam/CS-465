import { inject, Provider } from '@angular/core';
import {
  HttpInterceptorFn,
  HTTP_INTERCEPTORS
} from '@angular/common/http';

import { AuthenticationService } from '../services/authentication.service';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  // Identify auth endpoints we should NOT intercept
  const isAuthAPI =
    req.url.includes('login') ||
    req.url.includes('register');

  const authService = inject(AuthenticationService);

  if (authService.isLoggedIn() && !isAuthAPI) {
    const token = authService.getToken();

    const authReq = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });

    return next(authReq);
  }

  return next(req);
};

// If your book wants a provider constant, keep this:
export const authInterceptProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useValue: jwtInterceptor,
  multi: true
};
