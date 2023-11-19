import {Component, OnInit} from '@angular/core';
import { GenericDisplayTableColumns} from "@app/models/displayTableColumns";
import {CaptureModalComponent} from "@views/images/capture-modal/capture-modal.component";
import iconModel, {rowModel} from "@app/common/IconData";
import {CiudadanoDataService} from "@app/services/ciudadano-data.service";
import {ImagenFacialService} from "@app/services/imagen-facial.service";

@Component({
  selector: 'app-captation',
  templateUrl: './captation.component.html'
})
export class CaptationComponent implements OnInit {


  dataTest: GenericDisplayTableColumns[] = [
    {...rowModel, headerName: 'Foto', dataKeyName: 'foto', tooltipMsg: '', iconData: [iconModel], imgSrc: '', isImg: true},
    {...rowModel, headerName: 'No. Carné', dataKeyName: 'ci', tooltipMsg: '', iconData: [iconModel]},
    {...rowModel, headerName: 'Nombres', dataKeyName: 'name', tooltipMsg: '', iconData: [iconModel]},
    {...rowModel, headerName: 'Apellidos', dataKeyName: 'apellidos', tooltipMsg: '', iconData: [iconModel]},
    {...rowModel, headerName: 'Fecha Nacimiento', dataKeyName: 'date', tooltipMsg: '', iconData: [iconModel]},
    {...rowModel, headerName: 'Sexo', dataKeyName: 'sexo', tooltipMsg: '', iconData: [iconModel]},
    {...rowModel, headerName: 'Rol Universitario', dataKeyName: 'rol', tooltipMsg: '', iconData: [iconModel]},
    {...rowModel, headerName: 'Área', dataKeyName: 'area', tooltipMsg: '', iconData: [iconModel]},
    {...rowModel, headerName: 'Residente', dataKeyName: 'residente', tooltipMsg: '', iconData: [iconModel]},
    {
      ...rowModel, headerName: 'Acción', dataKeyName: 'action', tooltipMsg: 'Capturar imagen',
      isIcon: true, iconData: [{
        ...iconModel,
        icon: 'camera_alt',
        fns: () => {
        },
        isModalFunction: true,
        executeFns: true,
        componentModal: CaptureModalComponent,
        modalMetadata: {...iconModel.modalMetadata, width: '80vw'},
        tooltipMsg: ''
      }]
    },
  ];


  constructor(public ciudadanoDataService: CiudadanoDataService
  ) { }

  ngOnInit(): void {
    this.ciudadanoDataService.getCiudadanos();
    // this.ciudadanoDataService.clearData();
  }

}

