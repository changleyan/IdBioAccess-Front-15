import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UtilesService} from "@app/services/utiles.service";
import {PictaResponse} from "@app/models/response.picta.model";
import {Permission} from "@app/components/security/seguridad/models/permission";
import {BASE_API} from "@env/environment";



const URL = `${BASE_API}/permiso/`;

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor(
    private httpClient: HttpClient,
    private utilService: UtilesService
  ) {
  }

  getAll(params = {}) {
    const qParams = this.utilService.getQueryParams(params);
    return this.httpClient.get<PictaResponse<Permission>>(`${URL}?limit=500`, {
      params: qParams
    });
  }
}
