import {Component} from '@angular/core';
import {CiudadanoDisplay, GenericDisplayTableColumns} from "@app/models/displayTableColumns";
import {CaptureService} from "@app/services/capture/capture.service";
import {CaptureModalComponent} from "@views/images/capture-modal/capture-modal.component";
import {MatDialog} from "@angular/material/dialog";
import iconModel from "@app/common/IconData";

@Component({
  selector: 'app-captation',
  templateUrl: './captation.component.html'
})
export class CaptationComponent {


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
        icon: 'camera_alt',
        fns: () => {
        },
        isModalFunction: true,
        componentModal: CaptureModalComponent,
        modalMetadata: {width: '80vw'},
        tooltipMsg: ''
      }]
    },
  ];

  elemtData: CiudadanoDisplay[] = [
    {
      ci: '9547158555',
      name: 'Juan',
      apellidos: 'Perez Soto',
      date: '12/12/1990',
      sexo: 'Masculino',
      rol: 'Estudiante',
      area: 'Facultad 2',
      residente: 'Si'
    },
    {
      ci: '8745158555',
      name: 'Camilo',
      apellidos: 'Torres Quintana',
      date: '12/12/1990',
      sexo: 'Masculino',
      rol: 'Trabajdor',
      area: 'Facultad 1',
      residente: 'Si'
    },
    {
      ci: '0214755575',
      name: 'Jose Juan',
      apellidos: 'Manuel Sanchez',
      date: '12/12/1990',
      sexo: 'Masculino',
      rol: 'Estudiante',
      area: 'Facultad 2',
      residente: 'Si'
    },
  ];

  constructor(private captureService: CaptureService, private dialog: MatDialog
  ) {
  }

}

