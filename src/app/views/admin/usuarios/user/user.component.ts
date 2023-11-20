import {AfterViewInit, Component, OnInit} from '@angular/core';
import {
  GenericDisplayTableColumns, IconData,
  UserDisplay
} from "@app/models/displayTableColumns";
import iconModel, {rowModel} from "@app/common/IconData";
import {UserService} from "@app/services/user.service";
import {tap, throwError} from "rxjs";
import {UserFormComponent} from "@components/user/user-form/user-form.component";
import {ConfirmDialogComponent} from "@components/confirm-dialog/confirm-dialog.component";
import {Observable, Subject} from 'rxjs';
import {EventAction} from "@app/models/action.type";
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {MatSnackBar} from "@angular/material/snack-bar";
import {catchError} from "rxjs/operators";
import {LoadingService} from "@app/services/loading/loading.service";


@UntilDestroy()
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit, AfterViewInit {
  dataTest: GenericDisplayTableColumns[] = [
    {...rowModel, headerName: 'Nombres', dataKeyName: 'first_name', tooltipMsg: '', iconData: [iconModel]},
    {...rowModel, headerName: 'Apellidos', dataKeyName: 'last_name', tooltipMsg: '', iconData: [iconModel]},
    {...rowModel, headerName: 'Usuario', dataKeyName: 'username', tooltipMsg: '', iconData: [iconModel]},
    {...rowModel, headerName: 'No. Carné', dataKeyName: 'ci', tooltipMsg: '', iconData: [iconModel]},
    {...rowModel, headerName: 'Correo', dataKeyName: 'email', tooltipMsg: '', iconData: [iconModel]},
    {
      ...rowModel, headerName: 'Operaciones', dataKeyName: 'action1', tooltipMsg: '',
      isIcon: true,
      iconData: [{
        ...iconModel,
        icon: 'vpn_key',
        isModalFunction: true,
        componentModal: UserFormComponent,
        modalMetadata: {...iconModel.modalMetadata, width: '80vw', data: {action: 'changePassword'}},
        tooltipMsg: 'Cambiar contraseña'
      },{
        ...iconModel,
        icon: 'edit',
        isModalFunction: true,
        componentModal: UserFormComponent,
        modalMetadata: {...iconModel.modalMetadata, width: '80vw'},
        tooltipMsg: 'Editar usuario'
      },
        {
          ...iconModel,
          icon: 'delete',
          isModalFunction: true,
          componentModal: ConfirmDialogComponent,
          modalMetadata: {width: '25vw', data: {title: 'Eliminar usuario', msg: '¿Desea eliminar el usuario?'}},
          tooltipMsg: 'Eliminar usuario'
        }]
    }
  ];

  elemtData: UserDisplay[] = [];

  dataButton: IconData = {
    ...iconModel, tooltipMsg: 'Crear usuario', icon: 'add',
    isModalFunction: true, show: true, componentModal: UserFormComponent
  };

  isLoading = true;

  actionObservable!: Observable<any>;

  actionSubject = new Subject<any>();

  constructor(private userService: UserService,
              private loadingService: LoadingService,
              private snackBar: MatSnackBar,) {
    this.loadingService.setLoading(true);
  }

  ngOnInit() {
    this.actionObservable = this.actionSubject.asObservable();

    this.actionObservable.pipe(
      untilDestroyed(this),
      tap(data => {
        this.handleActionObservable(data);
      })
    ).subscribe();
  }

  ngAfterViewInit() {
    this.getUser();
  }


  getUser(): void {
    this.userService.getUser().pipe(
      tap(data => {
        this.elemtData = data.results;
        this.isLoading = false;
        this.loadingService.setLoading(false);
      })
    ).subscribe();
  }

  handleEvent(event: any) {
    this.actionSubject.next(JSON.parse(event));
  }

  handleActionObservable(evento: EventAction) {
    this.loadingService.setLoading(true);
    switch (evento.action) {
      case 'add':
        this.genericResponse(evento, 'Usuario creado correctamente.');
        break;
      case 'delete':
        this.deleteUser(evento);
        break;
      case 'edit':
        this.genericResponse(evento, 'Usuario editado correctamente.');
        break;
      case 'vpn_key':
        this.genericResponse(evento, 'Contraseña cambiada correctamente.');
        break;
      default:
        this.genericResponse(evento, 'Acción no reconocida');
        console.log('Acción no reconocida:', evento.action);
    }
  }

  deleteUser(evento: EventAction) {
    if (evento.data?.data) {
      this.userService.delete(evento.data?.id).pipe(
        tap(data => {
          this.getUser();
          this.snackBar.open('Usuario eliminado correctamente.', 'Cerrar', {
            duration: 5000
          });
        }),
        catchError(error => {
          this.loadingService.setLoading(false);
          console.error('Error al eliminar el usuario:', error);
          this.snackBar.open('Error al eliminar el usuario. Por favor, inténtalo de nuevo.', 'Cerrar', {
            duration: 5000
          });
          return throwError(error); // Reenvía el error
        })
      ).subscribe();
    }
  }

  genericResponse(evento: EventAction, msg: string = '') {
    if (evento.data?.data) {
      this.getUser();
      this.snackBar.open(msg, 'Cerrar', {
        duration: 5000
      });
    }
    this.loadingService.setLoading(false);
  }

}
