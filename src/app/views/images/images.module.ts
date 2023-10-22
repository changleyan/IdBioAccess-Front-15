import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesRoutingModule } from './images-routing.module';
import {CardsModule} from "../../components/cards/cards.module";
import { CaptationComponent } from './captation/captation.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CaptureModalComponent } from './capture-modal/capture-modal.component';
import {MaterialModule} from "@app/shared/material.module";


@NgModule({
  declarations: [
    CaptationComponent,
    CaptureModalComponent
  ],
    imports: [
        CommonModule,
        ImagesRoutingModule,
        CardsModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
    ],
})
export class ImagesModule { }
