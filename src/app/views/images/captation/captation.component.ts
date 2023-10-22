import { Component } from '@angular/core';

import {CiudadanoDisplay, GenericDisplayTableColumns} from "@app/models/displayTableColumns";

@Component({
  selector: 'app-captation',
  templateUrl: './captation.component.html'
})
export class CaptationComponent {

  dataTest: GenericDisplayTableColumns[] = [
    {headerName: 'No. Carné', dataKeyName: 'ci', tooltipMsg: ''},
    {headerName: 'Nombres', dataKeyName: 'name', tooltipMsg: ''},
    {headerName: 'Apellidos', dataKeyName: 'apellidos', tooltipMsg: ''},
    {headerName: 'Fecha Nacimiento', dataKeyName: 'date', tooltipMsg: ''},
    {headerName: 'Sexo', dataKeyName: 'sexo', tooltipMsg: ''},
    {headerName: 'Rol Universitario', dataKeyName: 'rol', tooltipMsg: ''},
    {headerName: 'Área', dataKeyName: 'area', tooltipMsg: ''},
    {headerName: 'Residente', dataKeyName: 'residente', tooltipMsg: ''},
    {headerName: 'Acción', dataKeyName: 'action', tooltipMsg: 'Capturar imagen',
      isIcon: true, iconData: {icon: 'camera_alt', fns: (data: any) => {
          console.log('ratata', data);}}},
  ];

  elemtData: CiudadanoDisplay[] = [
    {ci: '9547158555', name: 'Juan', apellidos: 'Perez Soto', date: '12/12/1990', sexo: 'Masculino', rol: 'Estudiante', area: 'Facultad 2', residente: 'Si'},
    {ci: '8745158555', name: 'Camilo', apellidos: 'Torres Quintana', date: '12/12/1990', sexo: 'Masculino', rol: 'Trabajdor', area: 'Facultad 1', residente: 'Si'},
    {ci: '0214755575', name: 'Jose Juan', apellidos: 'Manuel Sanchez', date: '12/12/1990', sexo: 'Masculino', rol: 'Estudiante', area: 'Facultad 2', residente: 'Si'},
  ];

}

