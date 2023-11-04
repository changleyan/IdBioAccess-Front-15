import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminNavbarComponent} from "./admin-navbar/admin-navbar.component";
import {IndexNavbarComponent} from "./index-navbar/index-navbar.component";
import {SharedModule} from "@app/shared/shared.module";
import {DropdownsModule} from "@components/dropdowns/dropdowns.module";
import {AppRoutingModule} from "@app/app-routing.module";



@NgModule({
  declarations: [
    AdminNavbarComponent,
    IndexNavbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DropdownsModule,
    AppRoutingModule
  ],
  exports: [
    AdminNavbarComponent,
    IndexNavbarComponent
  ]
})
export class NavbarsModule { }
