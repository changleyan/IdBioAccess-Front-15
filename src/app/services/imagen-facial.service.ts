import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {BASE_API} from "../../environments/environment";
import {Ciudadano} from "../models/ciudadano.response.type";

const API_URL = `${BASE_API}/dimagenfacial`;

@Injectable({
  providedIn: 'root'
})
export class ImagenFacialService {

  ciudadano!: Ciudadano;

  constructor(private http: HttpClient) { }


  // Método para crear una imagen facial
  createImagenFacial(body: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${API_URL}/`, body, { headers })
      .pipe(catchError(this.handleError));
  }

  // Método para obtener todas las imágenes faciales
  getImagenesFaciales(): Observable<any> {
    return this.http.get(API_URL)
      .pipe(catchError(this.handleError));
  }

  // Método para obtener una imagen facial por ID
  getImagenFacialById(id: number): Observable<any> {
    const url = `${API_URL}/${id}`;
    return this.http.get(url)
      .pipe(catchError(this.handleError));
  }

  // Método para actualizar una imagen facial por ID
  updateImagenFacial(id: number, body: any): Observable<any> {
    const url = `${API_URL}/${id}/`;
    return this.http.patch(url, body)
      .pipe(catchError(this.handleError));
  }

  // Método para eliminar una imagen facial por ID
  deleteImagenFacial(id: number): Observable<any> {
    const url = `${API_URL}/${id}`;
    return this.http.delete(url)
      .pipe(catchError(this.handleError));
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

  public setCiudadano(ciudadano: Ciudadano) {
    console.log(ciudadano, 'ciudadano');
    this.ciudadano = ciudadano;
  }

  get getCiudadano() {
    return this.ciudadano;
  }
}
