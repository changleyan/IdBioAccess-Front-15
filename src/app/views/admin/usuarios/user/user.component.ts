import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {
  GenericDisplayTableColumns, IconData,
  UserDisplay
} from "@app/models/displayTableColumns";
import iconModel from "@app/common/IconData";
import {CaptureModalComponent} from "@views/images/capture-modal/capture-modal.component";
import {UserService} from "@app/services/user.service";
import {tap, throwError} from "rxjs";
import {UserFormComponent} from "@components/user/user-form/user-form.component";
import {ConfirmDialogComponent} from "@components/confirm-dialog/confirm-dialog.component";
import {Observable, Subject} from 'rxjs';
import {EventAction} from "@app/models/action.type";
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {MatSnackBar} from "@angular/material/snack-bar";
import {catchError} from "rxjs/operators";


@UntilDestroy()
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit, AfterViewInit {
  dataTest: GenericDisplayTableColumns[] = [
    {headerName: 'Nombres', dataKeyName: 'first_name', tooltipMsg: '', iconData: [iconModel]},
    {headerName: 'Apellidos', dataKeyName: 'last_name', tooltipMsg: '', iconData: [iconModel]},
    {headerName: 'Usuario', dataKeyName: 'username', tooltipMsg: '', iconData: [iconModel]},
    {headerName: 'No. Carné', dataKeyName: 'ci', tooltipMsg: '', iconData: [iconModel]},
    {headerName: 'Correo', dataKeyName: 'email', tooltipMsg: '', iconData: [iconModel]},
    {
      headerName: 'Operaciones', dataKeyName: 'action1', tooltipMsg: '',
      isIcon: true,
      iconData: [{
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
              private snackBar: MatSnackBar,) {
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
      })
    ).subscribe();
  }

  handleEvent(event: any) {
    this.actionSubject.next(JSON.parse(event));
  }

  handleActionObservable(evento: EventAction) {
    switch (evento.action) {
      case 'add':
        this.createUser(evento);
        break;
      case 'delete':
        this.deleteUser(evento);
        break;
      case 'edit':
        this.editUser(evento);
        break;
      default:
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
          console.error('Error al eliminar el usuario:', error);
          this.snackBar.open('Error al eliminar el usuario. Por favor, inténtalo de nuevo.', 'Cerrar', {
            duration: 5000
          });
          return throwError(error); // Reenvía el error
        })
      ).subscribe();
    }
  }

  createUser(evento: EventAction) {
    this.getUser();
    this.snackBar.open('Usuario creado correctamente.', 'Cerrar', {
      duration: 5000
    });
  }

  editUser(evento: EventAction) {
    this.getUser();
    this.snackBar.open('Usuario editado correctamente.', 'Cerrar', {
      duration: 5000
    });
  }

}
