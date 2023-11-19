import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BASE_API } from '../../environments/environment';
import {ResponseCiudadano} from "@app/models/ciudadano.response.type";

const API_URL = `${BASE_API}/dciudadano`;

@Injectable({
  providedIn: 'root'
})
export class CiudadanoService {

  constructor(private http: HttpClient) { }

  // Retrieve (GET)
  getCiudadano(): Observable<ResponseCiudadano> {
    return this.http.get<ResponseCiudadano>(API_URL)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Retrieve (GET) por parámetro de búsqueda
  getCiudadanoByParams(params: any): Observable<ResponseCiudadano> {
    // Construye la URL con los parámetros proporcionados
    const url = `${API_URL}?${this.buildQueryParams(params)}`;

    return this.http.get<ResponseCiudadano>(url).pipe(
      catchError(this.handleError)
    );
  }

  private buildQueryParams(params: any): string {
    // Convierte el objeto de parámetros en una cadena de consulta
    return Object.keys(params)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      .join('&');
  }

  // Create (POST)
  createCiudadano(ciudadanoData: any): Observable<ResponseCiudadano> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<ResponseCiudadano>(API_URL, ciudadanoData, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  // Update (PUT)
  updateCiudadano(ciudadanoId: number, updatedData: any): Observable<ResponseCiudadano> {
    const url = `${API_URL}/${ciudadanoId}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<ResponseCiudadano>(url, updatedData, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  // Delete (DELETE)
  deleteCiudadano(ciudadanoId: number): Observable<any> {
    const url = `${API_URL}/${ciudadanoId}`;
    return this.http.delete(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Un error del lado del cliente
      console.error('Error del lado del cliente:', error.error.message);
    } else {
      // El servidor devolvió un código de error
      console.error(`Código de error del servidor: ${error.status}, ` +
        `body: ${JSON.stringify(error.error)}`);
    }
    // Devolver un observable con un mensaje de error
    return throwError('Algo mal sucedió; por favor, inténtelo de nuevo más tarde.');
  }
}
