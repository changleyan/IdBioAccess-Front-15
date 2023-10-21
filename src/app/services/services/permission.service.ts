import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {baseUrl} from "@app/app.config";
import {UtilesService} from "@app/services/utiles.service";
import {PictaResponse} from "@app/models/response.picta.model";
import {Permission} from "@app/components/security/seguridad/models/permission";



const URL = `${baseUrl}/permiso/`;

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
    return this.httpClient.get<PictaResponse<Permission>>(`${URL}`, {
      params: qParams
    });
  }
}
