import {Component, OnInit} from '@angular/core';
import { GenericDisplayTableColumns} from "@app/models/displayTableColumns";
import {CaptureModalComponent} from "@views/images/capture-modal/capture-modal.component";
import iconModel, {rowModel} from "@app/common/IconData";
import {CiudadanoDataService} from "@app/services/ciudadano-data.service";
import {Observable, Subject, tap} from "rxjs";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {EventAction} from "@app/models/action.type";
import {LoadingService} from "@app/services/loading/loading.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@UntilDestroy()
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

  actionObservable!: Observable<any>;

  actionSubject = new Subject<any>();


  constructor(public ciudadanoDataService: CiudadanoDataService,
              private loadingService: LoadingService,
              private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.actionObservable = this.actionSubject.asObservable();

    this.actionObservable.pipe(
      untilDestroyed(this),
      tap(data => {
        this.handleActionObservable(data);
      })
    ).subscribe();

    this.ciudadanoDataService.getCiudadanos();
    // this.ciudadanoDataService.clearData();
  }

  handleEvent(event: any) {
    this.actionSubject.next(JSON.parse(event));
  }

  handleActionObservable(evento: EventAction) {
    this.loadingService.setLoading(true);
    switch (evento.action) {
      case 'camera_alt':
        this.genericResponse(evento, 'Imagen facial guradada correctamente.');
        break;
      default:
        this.genericResponse(evento, 'Acción no reconocida');
        console.log('Acción no reconocida:', evento.action);
    }
  }

  genericResponse(evento: EventAction, msg: string = '') {
    if (evento.data?.data) {
      // this.ciudadanoDataService.clearData();
      this.ciudadanoDataService.getCiudadanos();
      // this.snackBar.open(msg, 'Cerrar', {
      //   duration: 5000
      // });
    }
    this.loadingService.setLoading(false);
  }

}

