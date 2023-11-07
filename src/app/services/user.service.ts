import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BASE_API} from "../../environments/environment";
import {ResponsePictaUser} from "@app/models/user.response";


const API_URL = `${BASE_API}/user`;

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  getUser(): Observable<ResponsePictaUser> {
    return this.http.get<ResponsePictaUser>(API_URL);
  }

  create(body: any): Observable<any> {
    return this.http.post(
      API_URL + '/',
      {
        ...body
      },
      httpOptions
    );
  }

  delete(id: number): Observable<any> {
    return this.http.delete(
      API_URL + `/${id}/`,
      httpOptions
    );
  }

  edit(id: number, body: any): Observable<any> {
    return this.http.patch(
      API_URL + `/${id}/`,
      {
        ...body
      },
      httpOptions
    );
  }

  getDirtyValues(form: any) {
    const dirtyValues = {};

    Object.keys(form.controls)
      .forEach(key => {
        const currentControl = form.controls[key];

        if (currentControl.dirty) {
          if (currentControl.controls) {
            // @ts-ignore
            dirtyValues[key] = this.getDirtyValues(currentControl);
          } else {
            // @ts-ignore
            dirtyValues[key] = currentControl.value;
          }
        }
      });

    return dirtyValues;
  }

}
