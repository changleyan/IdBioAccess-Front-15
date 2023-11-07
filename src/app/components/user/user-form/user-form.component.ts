import {Component, OnInit} from '@angular/core';
import {User} from "@app/Interfaces/user.type";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "@app/services/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CustomValidators} from "@app/common/custom-validators";
import {GroupService} from "@app/services/services/group.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ErrorDialogComponent} from "@components/dialog/dialog.component";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html'
})
export class UserFormComponent implements OnInit{

  user!: User;
  userForm!: FormGroup;
  grupos!: any[];

  constructor(
    private userService: UserService,
    private groupService: GroupService,
    private fb: FormBuilder,
    private matSnackBar: MatSnackBar,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<UserFormComponent>
  ) {
    this.loadGroups();
  }

  ngOnInit() {
    this.userForm = this.fb.group({
      username: ['', [Validators.required]],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      password: ['', [Validators.required]],
      repeat_password: ['', [Validators.required]],
      ci: ['', [Validators.required]],
      email: ['', [Validators.email]],
      groups: ['', [Validators.required]],
    }, {
      validator: CustomValidators.passwordMatchValidator

    });

  }

  private loadGroups() {
    this.groupService.getAll().subscribe(data => {
      this.grupos = data.results;
    });
  }

  createUser() {
    const body = { ...this.userForm.value, groups: this.userForm.get('groups')?.value.toString() };
    this.userService.create(body).subscribe(
      () => {
        this.matSnackBar.open('Usuario creado correctamente.');
        this.dialogRef.close();
      },
      (error) => {
        if (error instanceof HttpErrorResponse && error.status === 400) {
          // Maneja los errores personalizados del API
          const errorResponse = error.error;
          this.handleApiErrors(errorResponse);
        } else {
          console.error('Error al crear usuario:', error);
          this.openErrorDialog('Error al crear usuario', 'Ocurrió un error inesperado.');
        }

      }
    );
  }

  handleApiErrors(errorResponse: any): void {
    const errorMessages: any[] = [];
    for (const key in errorResponse) {
      if (errorResponse.hasOwnProperty(key)) {
        const errorMessagesForKey = errorResponse[key];
        errorMessagesForKey.forEach((errorMessage: string) => {
          errorMessages.push(`${key}: ${errorMessage}`);
        });
      }
    }

    const errorMessage = errorMessages.join('\n');
    this.openErrorDialog('Error al crear usuario ', errorMessage);
  }

  openErrorDialog(title: string, message: string): void {
    const dialogRef = this.dialog.open(ErrorDialogComponent, {
      data: { title, message },
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Aquí puedes agregar más lógica si es necesario después de cerrar el diálogo de error.
    });
  }

}
