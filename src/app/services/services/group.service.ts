import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UtilesService} from "@app/services/utiles.service";
import {Group} from "@app/components/security/seguridad/models/group";
import {PictaResponse} from "@app/models/response.picta.model";
import {BASE_API} from "@env/environment";


const URL = `${BASE_API}/group/`;

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


  // @ts-ignore
  update({id, permissions}) {
    const body = this.utilService.getBody({permissions});
    return this.httpClient.patch(`${URL}${id}/`, body);
  }

  create(data: any) {
    const body = this.utilService.getBody(data);
    return this.httpClient.post(`${URL}`, body);

  }

  delete(id: number) {
    return this.httpClient.delete(`${URL}${id}/`);

  }
}
