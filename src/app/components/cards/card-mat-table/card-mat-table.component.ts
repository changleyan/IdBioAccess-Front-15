import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {GenericDisplayTableColumns, TableButton} from "@app/models/displayTableColumns";

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


  constructor() {
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

}


