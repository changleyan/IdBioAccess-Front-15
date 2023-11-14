import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import {GroupFormComponent} from "@components/security/group-form/group-form.component";
import {SeguridadComponent} from "@components/security/seguridad/seguridad.component";
import {MaterialModule} from "@app/shared/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxPermissionsModule} from "ngx-permissions";


@NgModule({
  declarations: [
    SeguridadComponent,
    GroupFormComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SeguridadRoutingModule,
    NgxPermissionsModule.forChild({
      permissionsIsolate: true,
      rolesIsolate: true})
  ]
})
export class SeguridadModule { }
