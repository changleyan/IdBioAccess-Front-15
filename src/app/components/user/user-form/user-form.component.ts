import {Component, Inject, OnInit} from '@angular/core';
import {User} from "@app/Interfaces/user.type";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "@app/services/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CustomValidators} from "@app/common/custom-validators";
import {GroupService} from "@app/services/services/group.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ErrorDialogComponent} from "@components/dialog/dialog.component";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html'
})
export class UserFormComponent implements OnInit {

  user!: User;
  userForm!: FormGroup;
  grupos!: any[];

  isEdit = false;

  constructor(
    private userService: UserService,
    private groupService: GroupService,
    private fb: FormBuilder,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<UserFormComponent>
  ) {
    this.loadGroups();
    this.isEdit = this.data ? true : false;
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
    if (this.isEdit) {
      this.fillForm();
    }
  }

  private fillForm() {
    this.userForm.patchValue(this.data);
    this.userForm.get('password')?.disable();
    this.userForm.get('repeat_password')?.disable();
    this.userForm.get('groups')?.setValue([...this.data?.groups.map((g: any) => g.id)]);
  }

  private loadGroups() {
    this.groupService.getAll().subscribe(data => {
      this.grupos = data.results;
    });
  }

  handleSubmit(){
    if (this.userForm.valid) {
      if (this.isEdit) {
        this.updateUser();
      } else {
        this.createUser();
      }
    }
  }

  createUser() {
    const body = {...this.userForm.value, groups: this.userForm.get('groups')?.value.toString()};
    this.userService.create(body).subscribe(
      () => {
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

  updateUser() {
    let body = this.userService.getDirtyValues(this.userForm);
    // @ts-ignore
    body = body?.groups ? {...body, groups: this.userForm.get('groups')?.value.toString()} : body;
    this.userService.edit(this.data?.id, body).subscribe(
      () => {
        this.dialogRef.close();
      },
      (error) => {
        if (error instanceof HttpErrorResponse && error.status === 400) {
          // Maneja los errores personalizados del API
          const errorResponse = error.error;
          this.handleApiErrors(errorResponse);
        } else {
          console.error('Error al editar usuario:', error);
          this.openErrorDialog('Error al editar usuario', 'Ocurrió un error inesperado.');
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
      data: {title, message},
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Aquí puedes agregar más lógica si es necesario después de cerrar el diálogo de error.
    });
  }

}