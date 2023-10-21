import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndexDropdownComponent} from "./index-dropdown/index-dropdown.component";
import {TableDropdownComponent} from "./table-dropdown/table-dropdown.component";
import {NotificationDropdownComponent} from "./notification-dropdown/notification-dropdown.component";
import {UserDropdownComponent} from "./user-dropdown/user-dropdown.component";
import {MaterialModule} from "@app/shared/material.module";
import {PagesDropdownComponent} from "@components/dropdowns/pages-dropdown/pages-dropdown.component";
import {RouterLink} from "@angular/router";


const dropdowns = [
  IndexDropdownComponent,
  TableDropdownComponent,
  NotificationDropdownComponent,
  UserDropdownComponent,
  PagesDropdownComponent
]

@NgModule({
  declarations: [
    dropdowns
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterLink,

  ],
  exports: [
    dropdowns
  ]
})
export class DropdownsModule {
}
