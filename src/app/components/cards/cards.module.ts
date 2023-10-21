import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardPageVisitsComponent} from "./card-page-visits/card-page-visits.component";
import {CardProfileComponent} from "./card-profile/card-profile.component";
import {CardSettingsComponent} from "./card-settings/card-settings.component";
import {CardSocialTrafficComponent} from "./card-social-traffic/card-social-traffic.component";
import {CardStatsComponent} from "./card-stats/card-stats.component";
import {CardTableComponent} from "./card-table/card-table.component";
import {CardFilterComponent} from "./card-filter/card-filter.component";
import {CardMatTableComponent} from "./card-mat-table/card-mat-table.component";
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "@app/shared/material.module";
import {DropdownsModule} from "@components/dropdowns/dropdowns.module";

const cardsComponents = [
  CardPageVisitsComponent,
  CardProfileComponent,
  CardSettingsComponent,
  CardSocialTrafficComponent,
  CardStatsComponent,
  CardTableComponent,
  CardFilterComponent,
  CardMatTableComponent,
]

@NgModule({
  declarations: [
    cardsComponents
  ],
  exports: [
    cardsComponents
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    DropdownsModule
  ]
})
export class CardsModule {
}
