import { NgClass } from '@angular/common';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonButton, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: true,
  imports: [IonInput, NgClass, IonButton, FormsModule]
})
export class SearchComponent implements OnInit {
  searchText: string = "";

  // ViewChild allows us to get a reference of a dom element in the Comp Class(acces of a single dom element)
  // will return the first element 
  @ViewChild("searchInput") searchInputElement!: ElementRef;

  @Output() searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() { }
  updateSearchText(e: any) {
    this.searchText = e;
    console.log(this.searchText);
    this.searchTextChanged.emit(this.searchText);
  }

  // 1.create an event
  // @Output() onSearchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  // SearchTextChanged() {
  //   this.onSearchTextChanged.emit(this.searchText);

  // }  
}
