import {Component} from "@angular/core";
import {LoadingService} from "@app/services/loading/loading.service";
import {StorageService} from "@app/services/storage.service";
import {NgxPermissionsService} from "ngx-permissions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "angular-dashboard-page";

  constructor(public loadingService: LoadingService,
              private permissionsService: NgxPermissionsService,
              private storageService: StorageService) {
    // Obtén el usuario actual desde el servicio
    const currentUser = this.storageService.getUser();

    // Verifica si el usuario y sus grupos existen
    if (currentUser && currentUser.user && currentUser.user.groups) {
      // Obtén los nombres de los grupos del usuario
      const userGroups = currentUser.user.groups.map((group: any) => group.name);

      // Configura los grupos del usuario
      // Esto se debe hacer para que los permisos se carguen correctamente
      // Por detras el modulo almacena los permisos de ese usuario y asi puede consultarlos
      this.permissionsService.loadPermissions(userGroups);
    }
  }

}
