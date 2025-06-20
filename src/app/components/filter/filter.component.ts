import { Component, EventEmitter, Output } from '@angular/core';
import { IfilterOptions } from '../../interfaces/filter-options.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  filterOptions: IfilterOptions = {
    name: null,
    startDate: null,
    endDate: null,
    status: null,
  };
  statusList = [
    { description: 'Ativo', value: true },
    { description: 'Inativo', value: false },
  ];

  @Output('onFilter') onFilterEmitt = new EventEmitter<IfilterOptions>();

  onFilter() {
    this.onFilterEmitt.emit(this.filterOptions);
  }
}
