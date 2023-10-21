import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SeguridadComponent} from "@components/security/seguridad/seguridad.component";

const routes: Routes = [
  {path: 'seguridad', component: SeguridadComponent},
  {path: "", redirectTo: "seguridad", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule {
}
