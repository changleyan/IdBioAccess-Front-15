import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-filter',
  templateUrl: './card-filter.component.html'
})
export class CardFilterComponent implements OnInit {

  selectedValue!: string;

  @Input() parameters = [
    {value: 'solapin', viewValue: 'Solapín'},
    {value: 'nombre', viewValue: 'Nombre'},
    {value: 'ci', viewValue: 'No.Carnet'}
  ];

  constructor() { }

  ngOnInit(): void {
    this.selectedValue = this.parameters[0].value;
  }

  handleParameterChange(): void {
  }

}
