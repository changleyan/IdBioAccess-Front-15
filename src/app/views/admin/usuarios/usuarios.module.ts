import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsuariosRoutingModule} from './usuarios-routing.module';
import {UserComponent} from './user/user.component';
import {MaterialModule} from "@app/shared/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CardsModule} from "@components/cards/cards.module";


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
    CardsModule
  ]
})
export class UsuariosModule {
}
