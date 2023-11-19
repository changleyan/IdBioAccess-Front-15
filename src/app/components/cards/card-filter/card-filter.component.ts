import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {CiudadanoDataService} from "@app/services/ciudadano-data.service";

@Component({
  selector: 'app-card-filter',
  templateUrl: './card-filter.component.html'
})
export class CardFilterComponent implements OnInit {

  selectedValue!: string;
  filterForm!: FormGroup;

  @Input() parameters = [
    {value: 'solapin', viewValue: 'Solapín'},
    {value: 'carnetidentidad', viewValue: 'No.Carnet'},
    {value: 'primernombre', viewValue: 'Nombre'},
  ];

  constructor(private fb: FormBuilder,
              private ciudadanoDataService: CiudadanoDataService) {
  }

  ngOnInit(): void {
    this.selectedValue = this.parameters[0].value;
    this.initForm();
  }

  initForm() {
    this.filterForm = this.fb.group({
      filters: this.fb.array([this.createFilter()])
    });
  }

  createFilter() {
    return this.fb.group({
      selectedValue: '',
      inputValue: ''
    });
  }

  handleSearchClick() {
    const filters = this.filterForm.value.filters;
    const searchObject: any = {};

    filters.forEach((filter: any) => {
      const key = filter.selectedValue;
      const value = filter.inputValue;

      if (key && value) {
        searchObject[key] = value;
      }
    });

    // console.log('Buscar con filtros:', filters);
    // console.log('Objeto de búsqueda:', searchObject);
    this.ciudadanoDataService.getCiudadanoByParam(searchObject);
  }

  handleParameterChange(index: number) {
    const filtersArray = this.filterForm.get('filters') as FormArray;
    // @ts-ignore
    const selectedValue = filtersArray.at(index).get('selectedValue').value;

    // Verifica si el selectedValue ya ha sido seleccionado en otros filtros
    const hasDuplicate = filtersArray.value.slice(0, index).some((filter: any) => filter.selectedValue === selectedValue);

    if (hasDuplicate) {
      // Elimina el filtro actual
      filtersArray.removeAt(index);
      // Puedes mostrar un mensaje o realizar otra acción para indicar que el filtro se ha eliminado
      console.log(`Ya has seleccionado el parámetro "${selectedValue}". El filtro anterior ha sido eliminado.`);
    }
  }

  addFilter() {
    // Adiciona un nuevo filtro
    const filtersArray = this.filterForm.get('filters') as FormArray;
    filtersArray.push(this.createFilter());
  }

  resetFilters() {
    // Limpia todos los filtros
    const filtersArray = this.filterForm.get('filters') as FormArray;
    filtersArray.clear();
    filtersArray.push(this.createFilter());
    this.ciudadanoDataService.clearData();
  }

  get filterControls() {
    return (this.filterForm.get('filters') as FormArray).controls;
  }


}
