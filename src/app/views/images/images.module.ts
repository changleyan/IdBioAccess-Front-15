import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesRoutingModule } from './images-routing.module';
import {CardsModule} from "../../components/cards/cards.module";
import { CaptationComponent } from './captation/captation.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CaptationComponent
  ],
    imports: [
        CommonModule,
        ImagesRoutingModule,
        CardsModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class ImagesModule { }
