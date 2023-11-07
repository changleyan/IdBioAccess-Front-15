import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-error-dialog',
  template: `
    <h1 mat-dialog-title>{{ data.title }}</h1>
    <div mat-dialog-content>
      <p>{{ data.message }}</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onCloseClick()">Cerrar</button>
    </div>
  `,
})
export class ErrorDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { title: string; message: string },
    private dialogRef: MatDialogRef<ErrorDialogComponent>
  ) {}

  onCloseClick(): void {
    // Cierra el diálogo de error
    this.dialogRef.close();
  }
}
