import { Component } from "@angular/core";
import {LoadingService} from "@app/services/loading/loading.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "angular-dashboard-page";

  constructor(public loadingService: LoadingService) {
  }
}
