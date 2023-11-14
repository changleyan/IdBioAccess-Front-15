import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsuariosRoutingModule} from './usuarios-routing.module';
import {UserComponent} from './user/user.component';
import {MaterialModule} from "@app/shared/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CardsModule} from "@components/cards/cards.module";
import {NgxPermissionsModule} from "ngx-permissions";


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CardsModule,
    NgxPermissionsModule.forChild({
      permissionsIsolate: true,
      rolesIsolate: true})
  ]
})
export class UsuariosModule {
}
