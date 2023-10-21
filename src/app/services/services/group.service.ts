import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UtilesService} from "@app/services/utiles.service";
import {Group} from "@app/components/security/seguridad/models/group";
import {PictaResponse} from "@app/models/response.picta.model";
import {baseUrl} from "@app/app.config";


const URL = `${baseUrl}/grupo/`;

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(
    private httpClient: HttpClient,
    private utilService: UtilesService
  ) {
  }

  getAll(params = {}) {
    const qParams = this.utilService.getQueryParams(params);
    return this.httpClient.get<PictaResponse<Group>>(`${URL}`, {
      params: qParams
    });
  }

  update({id, permissions}) {
    const body = this.utilService.getBody({permissions});
    return this.httpClient.patch(`${URL}${id}/`, body);
  }

  create(data) {
    const body = this.utilService.getBody(data);
    return this.httpClient.post(`${URL}`, body);

  }

  delete(id: number) {
    return this.httpClient.delete(`${URL}${id}/`);

  }
}
