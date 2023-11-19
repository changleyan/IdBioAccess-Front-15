import { Injectable } from '@angular/core';
import {CiudadanoDisplay} from "../models/displayTableColumns";
import {tap} from "rxjs";
import {Ciudadano} from "../models/ciudadano.response.type";
import {CiudadanoService} from "./ciudadano.service";
import {LoadingService} from "./loading/loading.service";

@Injectable({
  providedIn: 'root'
})
export class CiudadanoDataService {

  elemtData: CiudadanoDisplay[] = [];
  isLoading = true;

  constructor(private ciudadanoService: CiudadanoService,
              private loadingService: LoadingService) { }

  public getCiudadanos(): void {
    this.loadingService.setLoading(true);
    this.ciudadanoService.getCiudadano().pipe(
      tap(data => {
        this.elemtData = data.results.map((ciudadano: any) => this.transformarCiudadano(ciudadano));
        this.isLoading = false;
        this.loadingService.setLoading(false);
      })
    ).subscribe();
  }

  public getCiudadanoByParam(params: any): void {
    this.isLoading = false;
    this.loadingService.setLoading(true);
    this.ciudadanoService.getCiudadanoByParams(params).pipe(
      tap(data => {
        this.elemtData = data.results.map((ciudadano: any) => this.transformarCiudadano(ciudadano));
        this.isLoading = false;
        this.loadingService.setLoading(false);
      })
    ).subscribe();
  }

  public clearData(): void {
    this.isLoading = false;
    this.elemtData = [];
  }

  transformarCiudadano(ciudadano: Ciudadano): CiudadanoDisplay {
    const transformedCiudadano: CiudadanoDisplay = {
      ci: ciudadano.carnetidentidad || '', // Puedes ajustar la lógica según tus necesidades
      name: `${ciudadano.primernombre} ${ciudadano.segundonombre || ''}`.trim(),
      apellidos: `${ciudadano.primerapellido} ${ciudadano.segundoapellido || ''}`.trim(),
      date: ciudadano.fechanacimiento ? new Date(ciudadano.fechanacimiento).toLocaleDateString() : '',
      sexo: ciudadano.sexo.trim(),
      rol: ciudadano.roluniversitario.trim(),
      area: ciudadano.area.trim(),
      residente: ciudadano.residente ? 'Si' : 'No',
    };
    return transformedCiudadano;
  }


}
