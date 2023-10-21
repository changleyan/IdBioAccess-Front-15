import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {AdminComponent} from "./layouts/admin/admin.component";
import {DashboardComponent} from "@views/admin/dashboard/dashboard.component";
import {SettingsComponent} from "@views/admin/settings/settings.component";
import {TablesComponent} from "@views/admin/tables/tables.component";


const routes: Routes = [
  {
    path: "admin",
    component: AdminComponent,
    children: [
      {path: "dashboard", component: DashboardComponent},
      {path: "settings", component: SettingsComponent},
      {path: "tables", component: TablesComponent},
      {path: "", redirectTo: "dashboard", pathMatch: "full"},
    ],
  },
  {
    path: "administracion",
    component: AdminComponent,
    children: [
      {
        path: "usuarios",
        loadChildren: () => import('./views/admin/usuarios/usuarios.module').then((m) => m.UsuariosModule)
      }, {
        path: "seguridad",
        loadChildren: () => import('./views/admin/seguridad/seguridad.module').then((m) => m.SeguridadModule)
      },
      {path: "", redirectTo: "usuarios", pathMatch: "full"},
    ],
  },
  {
    path: "imagenes",
    component: AdminComponent,
    children: [
      {
        path: "captacion",
        loadChildren: () => import('./views/images/images.module').then((m) => m.ImagesModule)
      },
      {path: "", redirectTo: "captacion", pathMatch: "full"},
    ],
  },

  {path: "", redirectTo: "admin/dashboard", pathMatch: "full"},
  {path: "**", redirectTo: "", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
