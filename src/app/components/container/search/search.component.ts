import { NgClass } from '@angular/common';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: true,
  imports: [NgClass]
})
export class SearchComponent implements OnInit {
  searchText: string = "";

  @ViewChild("searchInput") searchInputElement!: ElementRef;

  @Output() searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() { }
  updateSearchText() {
    this.searchText = this.searchInputElement.nativeElement.value;
    this.searchTextChanged.emit(this.searchText);
  }

  // 1.create an event
  // @Output() onSearchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  // SearchTextChanged() {
  //   this.onSearchTextChanged.emit(this.searchText);

  // }  
}
