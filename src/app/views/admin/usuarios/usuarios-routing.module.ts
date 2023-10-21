import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from "@views/admin/usuarios/user/user.component";

const routes: Routes = [
  {path: 'usuarios', component: UserComponent},
  {path: "", redirectTo: "usuarios", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule {
}
