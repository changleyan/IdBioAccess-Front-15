import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSelectModule} from "@angular/material/select";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSortModule} from "@angular/material/sort";
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";

const materialToInclude = [
  MatSelectModule,
  MatSelectModule,
  MatTableModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatSortModule,
  MatInputModule,
  MatDialogModule,
  MatSnackBarModule,
  HttpClientModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatTooltipModule
]

@NgModule({
  declarations: [],
  exports: [
    materialToInclude
  ],
  imports: [
    CommonModule,
    materialToInclude
  ]
})
export class MaterialModule {
}
