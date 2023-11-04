import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from "./footer/footer.component";
import {FooterAdminComponent} from "./footer-admin/footer-admin.component";
import {SharedModule} from "@app/shared/shared.module";


@NgModule({
  declarations: [
    FooterComponent,
    FooterAdminComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [FooterComponent,
    FooterAdminComponent
  ]
})
export class FootersModule {
}
