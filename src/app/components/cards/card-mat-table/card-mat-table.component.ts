import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {GenericDisplayTableColumns, IconData, TableButton} from "@app/models/displayTableColumns";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-card-mat-table',
  templateUrl: './card-mat-table.component.html'
})
export class CardMatTableComponent implements OnInit, AfterViewInit {

  displayedColumns!: string[];
  tableDataSource!: MatTableDataSource<any>;  // MatTableDataSource para la tabla

  @Input() title: string = 'Resultados';
  @Input() dataSource!: any[];
  @Input() dataColum: GenericDisplayTableColumns[] = []
  @Input() dataButton: TableButton = {show: false, tooltip: '', icon: 'add', onClickF: () => {}};

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.displayedColumns = this.dataColum.map((elem: GenericDisplayTableColumns) => elem.dataKeyName);
  }

  ngAfterViewInit() {
    // Inicializa la MatTableDataSource con el dataSource y displayedColumns
    this.tableDataSource = new MatTableDataSource(this.dataSource);

    // Asocia el paginator a la tabla
    this.tableDataSource.paginator = this.paginator;
  }

  handleClick(data: any, dataIcon: IconData): any {
    return dataIcon.isModalFunction ? this.openDialog(data, dataIcon.componentModal) : dataIcon.fns(data);
  }

  openDialog(data: any, component: any) {
    const dialogRef = this.dialog.open(component, {data: data});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}


