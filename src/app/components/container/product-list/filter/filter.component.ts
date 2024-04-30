import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  standalone: true,
  imports:[FormsModule]
})
export class FilterComponent implements OnInit {

  @Input() all: number = 0;
  @Input() inStock: number = 0;
  @Input() outOfStock: number = 0;

  @Output() selectedFilterRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() { }
  onSelectedFilterRadioButtonChanged() {
    this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton)
  }
  selectedFilterRadioButton: string = "all";

}
