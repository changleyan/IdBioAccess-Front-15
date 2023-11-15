import {Injectable} from '@angular/core';
import {delay, Observable, of, throwError} from "rxjs";

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {
  }

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  // public saveUser(user: any): Observable<void> {
  //   try {
  //     window.sessionStorage.removeItem(USER_KEY);
  //     window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  //     return of(); // Devuelve un observable vacío para indicar que la operación fue exitosa.
  //   } catch (error) {
  //     // Si ocurre algún error de forma síncrona, se manejará aquí.
  //     console.error('Error al guardar el usuario de forma síncrona:', error);
  //     return throwError('Error al guardar el usuario.'); // Puedes personalizar el mensaje de error según tus necesidades.
  //   }
  // }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    return user ? JSON.parse(user) : {}
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    return user ? true : false
  }
}
