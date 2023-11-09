import {Injectable} from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HTTP_INTERCEPTORS,
  HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {StorageService} from "../services/storage.service";
import {EventBusService} from "../services/event-bus.service";
import {EventData} from "../models/event.class";
import {Router} from "@angular/router";
import {LoadingService} from "@app/services/loading/loading.service";
import {MatSnackBar} from "@angular/material/snack-bar";


@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  private isRefreshing = false;

  constructor(private storageService: StorageService,
              private router: Router,
              private snackBar: MatSnackBar,
              private loadingService: LoadingService,
              private eventBusService: EventBusService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Clonar la solicitud original para no modificarla directamente.
    let newReq = req.clone();

    // Comprobar si la solicitud no es para 'auth/login'.
    if (!newReq.url.includes('auth/login') && this.storageService.isLoggedIn()) {
      // Obtener el token de acceso del almacenamiento y agregarlo al encabezado 'Authorization'.
      const accessToken = this.storageService.getUser()?.access_token;

      if (accessToken) {
        newReq = newReq.clone({
          setHeaders: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
      }
    }
    if(!this.storageService.isLoggedIn()) {
      this.router.navigate(['/auth/login']);
      this.loadingService.setLoading(false);
    }

    return next.handle(newReq).pipe(
      catchError((error) => {
        if (
          error instanceof HttpErrorResponse &&
          !req.url.includes('auth/login') &&
          (error.status === 401 || error.status === 403)
        ) {
          return error.status === 401 ?
            this.handle401Error(req, next, 'Su sesión ha expirado. Por favor, inicia sesión de nuevo.')
            : this.handle401Error(req, next, 'No tiene permisos para realizar esta operación');
        }

        return throwError(() => error);
      })
    );
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler, msg: string) {
    this.snackBar.open(msg, 'Cerrar', {
      duration: 5000
    });
    this.loadingService.setLoading(false);
    if (this.storageService.isLoggedIn()) {
      this.eventBusService.emit(new EventData('logout', null));
    }
    this.router.navigate(['/auth/login']);

    return next.handle(request);
  }
}

export const httpInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true},
];
