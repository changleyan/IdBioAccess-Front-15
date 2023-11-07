import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
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
  constructor(private http: HttpClient) {}


  getUser(): Observable<ResponsePictaUser> {
    return this.http.get<ResponsePictaUser>(API_URL);
  }

  create(body: any): Observable<any> {
    return this.http.post(
      API_URL+ '/',
      {
        ...body
      },
      httpOptions
    );
  }

}
