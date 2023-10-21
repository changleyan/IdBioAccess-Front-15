import { Component, OnInit } from "@angular/core";
import {NavigationItem} from "../../Interfaces/navigation.types";
import {defaultNavigation} from "../../common/navigation/data";
import {TitleService} from "@app/services/title/title.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
})
export class SidebarComponent implements OnInit {
  collapseShow = "hidden";
  navigationsItems!: NavigationItem[];
  constructor(private titleService: TitleService) {}

  ngOnInit() {
    this.navigationsItems = defaultNavigation;
  }
  toggleCollapseShow(classes: any) {
    this.collapseShow = classes;
  }

  handleClickItem(path: string) {
    console.log(path)
    this.titleService.setModuleTitle(path);
  }
}
