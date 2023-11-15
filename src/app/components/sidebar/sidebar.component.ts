import { Component, OnInit } from "@angular/core";
import {NavigationItem} from "../../Interfaces/navigation.types";
import {defaultNavigation} from "../../common/navigation/data";
import {TitleService} from "@app/services/title/title.service";
import {StorageService} from "@app/services/storage.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
})
export class SidebarComponent implements OnInit {
  collapseShow = "hidden";
  navigationsItems!: NavigationItem[];
  constructor(private titleService: TitleService, private storageService: StorageService) {}

  ngOnInit() {
    const currentUser = this.storageService.getUser();
    if (currentUser && currentUser.user && currentUser.user.groups) {
      const userGroups = currentUser.user.groups.map((group: any) => group.name);
      this.navigationsItems = defaultNavigation.filter((item) => (item.hidden === false && userGroups.some((elem: string) => item.permissions.includes(elem))));
    } else {
      this.navigationsItems = defaultNavigation.filter((item) => (item.hidden === false));
    }
  }
  toggleCollapseShow(classes: any) {
    this.collapseShow = classes;
  }

  handleClickItem(path: string) {
    this.titleService.setModuleTitle(path);
  }
}
