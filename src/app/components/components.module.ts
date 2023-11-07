import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardsModule} from "./cards/cards.module";
import {ConfirmDialogComponent} from "./confirm-dialog/confirm-dialog.component";
import {ContainerComponent} from "./container/container.component";
import {HeaderStatsComponent} from "./headers/header-stats/header-stats.component";
import {MapExampleComponent} from "./maps/map-example/map-example.component";
import {SeguridadComponent} from "./security/seguridad/seguridad.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {NavbarsModule} from "./navbars/navbars.module";
import {FootersModule} from "./footers/footers.module";
import {DropdownsModule} from "./dropdowns/dropdowns.module";
import {SharedModule} from "@app/shared/shared.module";
import {AppRoutingModule} from "@app/app-routing.module";
import { UserFormComponent } from './user/user-form/user-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ErrorDialogComponent } from './dialog/dialog.component';

const sharedComponents = [
  ConfirmDialogComponent,
  ContainerComponent,
  HeaderStatsComponent,
  MapExampleComponent,

  SidebarComponent
];


@NgModule({
  declarations: [
    sharedComponents,
    UserFormComponent,
    ErrorDialogComponent
  ],
  imports: [
    CommonModule,
    CardsModule,
    NavbarsModule,
    FootersModule,
    DropdownsModule,
    SharedModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    CardsModule,
    NavbarsModule,
    FootersModule,
    DropdownsModule,
    sharedComponents
  ]
})
export class ComponentsModule { }
