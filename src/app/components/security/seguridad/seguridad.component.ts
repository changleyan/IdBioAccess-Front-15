import {Component, OnInit, ViewChild} from '@angular/core';
import {Group} from "@app/components/security/seguridad/models/group";
import {Permission} from "@app/components/security/seguridad/models/permission";
import {MatSelectionList} from "@angular/material/list";
import {FormControl} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {PermissionService} from "@app/services/services/permission.service";
import {ConfirmDialogComponent} from "@app/components/confirm-dialog/confirm-dialog.component";
import {GroupFormComponent} from "@app/components/security/group-form/group-form.component";
import {debounceTime, tap} from "rxjs/operators";
import {GroupService} from "@app/services/services/group.service";
import {LoadingService} from "@app/services/loading/loading.service";
import {forkJoin, Observable} from "rxjs";

@Component({
  selector: 'app-seguridad',
  templateUrl: './seguridad.component.html',
  styleUrls: ['./seguridad.component.css']
})
export class SeguridadComponent implements OnInit {

  groups!: Group[];
  permissions!: Permission[];
  selectedPermissions: any;
  selectedGroup!: Group;
  selectedIndex = 1;
  @ViewChild('permissionsSelected') permissionsSelected!: MatSelectionList;
  filteredPermissions!: Permission[];
  permissionFilterControl = new FormControl('');
  changed = false;

  loadGroups$ = this.loadGroups();
  loadPermissions$ = this.loadPermissions();

  constructor(
    private groupService: GroupService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private loadingService: LoadingService,
    private permissionService: PermissionService) {
    this.loadingService.setLoading(true);
  }


  ngOnInit(): void {
    this.loadData()
    this.listenFilter();
  }

  loadData() {
    forkJoin([
      this.loadGroups$,
      this.loadPermissions$
    ]).subscribe(([groupsData, permissionsData]) => {
      this.loadingService.setLoading(false);
    });
  }

  selectGroup(index: number) {
    if (this.changed) {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        data: {
          title: 'Confirmación',
          msg: 'Hay cambios sin guardar. Al cambiar de grupo perderá los cambios realizados. ¿Desea continuar?'
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.selectedIndex = index;
          this.selectedGroup = this.groups[index];
          this.selectedPermissions = this.selectedGroup.permissions.map(p => p.id);
          this.changed = false;
        }
      });
    } else {
      this.selectedIndex = index;
      this.selectedGroup = this.groups[index];
      this.selectedPermissions = this.selectedGroup.permissions.map(p => p.id);
    }

  }

  changeSelection() {
    this.changed = true;
  }

  saveChanges() {
    if (this.changed) {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        data: {
          title: 'Confirmación',
          msg: '¿Está seguro que desea guardar los cambios realizados?'
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.groupService.update({id: this.selectedGroup.id, permissions: this.selectedPermissions}).subscribe(
            () => {
              this.snackBar.open('Cambios guardados correctamente.');
              this.loadGroups();
              this.changed = false;
            },
            () => {
              this.snackBar.open('Error al guardar los cambios.');
              this.changed = false;
            }
          );
        }
      });
    }
  }

  newGroup() {
    const ref = this.dialog.open(GroupFormComponent);
    ref.afterClosed().subscribe(result => {
      if (result) {
        this.groupService.create(result).subscribe(created => {
          this.snackBar.open('Grupo creado correctamente.');

          this.loadGroups();

        });
      }
    });
  }

  toggleSelectAll(checkedd: any) {
    this.changed = true;
    checkedd ? this.permissionsSelected.selectAll() : this.permissionsSelected.deselectAll();
  }

  restore() {
    this.selectedPermissions = this.selectedGroup.permissions.map(p => p.id);
    this.changed = false;
  }

  private loadGroups(): Observable<any> {
    return this.groupService.getAll().pipe(
      tap(data => {
        this.groups = data.results;
        this.selectedGroup = this.groups[0];
        this.selectedPermissions = this.selectedGroup.permissions.map(p => p.id);
        this.selectedIndex = 0;
      })
    );
  }

  private loadPermissions(): Observable<any> {
    return this.permissionService.getAll().pipe(
      tap(data => {
        this.permissions = data.results;
        this.filteredPermissions = this.permissions;
      })
    );
  }

  private listenFilter() {
    this.permissionFilterControl.valueChanges.pipe(
      debounceTime(500)
    ).subscribe((value: string | null) => {
      if (value) {
        this.filteredPermissions = this.permissions.filter(p => p.name.toLowerCase().includes(value.toLowerCase()));
      } else {
        this.filteredPermissions = this.permissions;
      }
    });
  }

  edit(group: Group) {
    const ref = this.dialog.open(GroupFormComponent, {
      data: {
        group
      }
    });
    ref.afterClosed().subscribe(result => {
      if (result) {
        // this.groupService.create(result).subscribe(created => {
        //
        // });
      }
    });
  }

  delete(group: Group) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirmación',
        msg: '¿Está seguro que desea eliminar este grupo?'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.groupService.delete(group.id).subscribe(
          () => {
            this.snackBar.open('Grupo eliminado correctamente.');
            this.loadGroups();
          },
          () => {
            this.snackBar.open('Error al eliminar el grupo.');
          }
        );
      }
    });
  }


}
