import {AfterViewInit, Component, OnInit} from '@angular/core';
import {
  CiudadanoDisplay,
  Element,
  GenericDisplayTableColumns,
  TableButton,
  UserDisplay
} from "@app/models/displayTableColumns";
import iconModel from "@app/common/IconData";
import {CaptureModalComponent} from "@views/images/capture-modal/capture-modal.component";
import {UserService} from "@app/services/user.service";
import {tap} from "rxjs";

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
        icon: 'edit',
        fns: () => {
        },
        isModalFunction: true,
        componentModal: CaptureModalComponent,
        modalMetadata: {width: '80vw'},
        tooltipMsg: 'toto'
      },
        {
          icon: 'delete',
          fns: () => {
          },
          isModalFunction: true,
          componentModal: CaptureModalComponent,
          modalMetadata: {width: '80vw'},
          tooltipMsg: 'toto2'
        }]
    }
  ];

  elemtData: UserDisplay[] = [];

  dataButton: TableButton = {
    show: true,
    tooltip: 'Crear usuario',
    icon: 'add',
    onClickF: this.addUser
  }

  isLoading = true;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.getUser();
  }

  addUser() {
    console.log('787878787');
  }

  getUser(): void {
    this.userService.getUser().pipe(
      tap(data => {
        this.elemtData = data.results;
        this.isLoading = false;
      })
    ).subscribe();
  }

}
