import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {GenericDisplayTableColumns, IconData, TableButton} from "@app/models/displayTableColumns";
import {MatDialog} from "@angular/material/dialog";
import iconModel from "@app/common/IconData";
import {EventAction} from "@app/models/action.type";

@Component({
  selector: 'app-card-mat-table',
  templateUrl: './card-mat-table.component.html',
  styleUrls: ['./card-mat-table.component.scss']
})
export class CardMatTableComponent implements OnChanges, OnInit, AfterViewInit {

  displayedColumns!: string[];
  tableDataSource!: MatTableDataSource<any>;  // MatTableDataSource para la tabla

  @Input() title: string = 'Resultados';
  @Input() dataSource!: any[];
  @Input() dataColum: GenericDisplayTableColumns[] = []
  @Input() dataButton: IconData = iconModel;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @Output() actionEvent = new EventEmitter();

  borderColor: string = 'blue';


  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.displayedColumns = this.dataColum.map((elem: GenericDisplayTableColumns) => elem.dataKeyName);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataSource']) {
      // Actualiza la fuente de datos interna cuando cambie dataSource
      this.actualizarFuenteDeDatos();
    }
  }

  ngAfterViewInit() {
    // Inicializa la MatTableDataSource con el dataSource y displayedColumns
    this.tableDataSource = new MatTableDataSource(this.dataSource);

    // Asocia el paginator a la tabla
    this.tableDataSource.paginator = this.paginator;
  }

  private actualizarFuenteDeDatos() {
    if (this.tableDataSource) {
      this.tableDataSource.data = this.dataSource;
    }
  }

  handleClick(data: any, dataIcon: IconData): any {
    return dataIcon.executeFns ? this.handleClickFns(data, dataIcon) : dataIcon.isModalFunction ? this.openDialog(data, dataIcon.componentModal, dataIcon.modalMetadata, dataIcon.icon) : dataIcon.fns(data);
  }

  handleClickFns(data: any, dataIcon: IconData) {
    dataIcon.fns(data);
    this.openDialog(data, dataIcon.componentModal, dataIcon.modalMetadata, dataIcon.icon);
  }

  openDialog(data: any, component: any, modalMetadata: any, action: string = '') {
    modalMetadata.data = {...modalMetadata.data, ...data};
    const dialogRef = this.dialog.open(component, {...modalMetadata});
    dialogRef.afterClosed().subscribe(result => {
      this.emitEvento({action, data: {id: data?.id, data:result} })
    });
  }

  emitEvento(datos: EventAction) {
    this.actionEvent.emit(JSON.stringify(datos));
  }

  getColumnType(column: any): string {
    if (column.isIcon) {
      return 'icon';
    } else if (column.isImg) {
      return 'img';
    } else {
      return 'text';
    }
  }

  getColorForRole(role: string): string {
    switch (role.toLowerCase()) {
      case 'visitante':
        return '#18af7a';
      case 'trabajador':
        return '#af1818';
      case 'estudiante':
        return '#2544a7';
      case 'tercerizado':
        return '#175a0c';
      case 'familiar':
        return '#9d590f';
      case 'servicios':
        return '#630f9d';
      case 'postgrado':
        return '#eae406';
      case 'extranjero':
        return '#000';
      default:
        return ''; // Color predeterminado para roles no especificados, por defecto ninguno
    }
  }

}


