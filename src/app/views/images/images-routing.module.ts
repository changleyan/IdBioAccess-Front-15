import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CaptationComponent} from "./captation/captation.component";

const routes: Routes = [
  {path: 'captacion', component: CaptationComponent},
  {path: "", redirectTo: "captacion", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImagesRoutingModule { }
