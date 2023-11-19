import {Component, OnInit} from '@angular/core';
import {CiudadanoDisplay, GenericDisplayTableColumns} from "@app/models/displayTableColumns";
import {CaptureService} from "@app/services/capture/capture.service";
import {CaptureModalComponent} from "@views/images/capture-modal/capture-modal.component";
import {MatDialog} from "@angular/material/dialog";
import iconModel from "@app/common/IconData";
import {tap} from "rxjs";
import {CiudadanoService} from "@app/services/ciudadano.service";
import {LoadingService} from "@app/services/loading/loading.service";
import {Ciudadano} from "@app/models/ciudadano.response.type";
import {CiudadanoDataService} from "@app/services/ciudadano-data.service";

@Component({
  selector: 'app-captation',
  templateUrl: './captation.component.html'
})
export class CaptationComponent implements OnInit {


  dataTest: GenericDisplayTableColumns[] = [
    {headerName: 'No. Carné', dataKeyName: 'ci', tooltipMsg: '', iconData: [iconModel]},
    {headerName: 'Nombres', dataKeyName: 'name', tooltipMsg: '', iconData: [iconModel]},
    {headerName: 'Apellidos', dataKeyName: 'apellidos', tooltipMsg: '', iconData: [iconModel]},
    {headerName: 'Fecha Nacimiento', dataKeyName: 'date', tooltipMsg: '', iconData: [iconModel]},
    {headerName: 'Sexo', dataKeyName: 'sexo', tooltipMsg: '', iconData: [iconModel]},
    {headerName: 'Rol Universitario', dataKeyName: 'rol', tooltipMsg: '', iconData: [iconModel]},
    {headerName: 'Área', dataKeyName: 'area', tooltipMsg: '', iconData: [iconModel]},
    {headerName: 'Residente', dataKeyName: 'residente', tooltipMsg: '', iconData: [iconModel]},
    {
      headerName: 'Acción', dataKeyName: 'action', tooltipMsg: 'Capturar imagen',
      isIcon: true, iconData: [{
        ...iconModel,
        icon: 'camera_alt',
        fns: () => {
        },
        isModalFunction: true,
        componentModal: CaptureModalComponent,
        modalMetadata: {...iconModel.modalMetadata, width: '80vw'},
        tooltipMsg: ''
      }]
    },
  ];


  constructor(public ciudadanoDataService: CiudadanoDataService
  ) { }

  ngOnInit(): void {
    // this.ciudadanoDataService.getCiudadanos();
    this.ciudadanoDataService.clearData();
  }

}

