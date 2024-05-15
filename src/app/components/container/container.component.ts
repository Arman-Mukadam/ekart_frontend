import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchComponent } from "./search/search.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { FeaturedBrandsComponent } from "./featured-brands/featured-brands.component";
import { IonButton, IonGrid, IonRow, IonCol } from "@ionic/angular/standalone";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonButton, SearchComponent, ProductListComponent, ProductDetailComponent, FeaturedBrandsComponent, IonGrid]
})
export class ContainerComponent implements OnInit {
  listOfString: string[] = ["Mark", "Steve", "Bob", "Harry"]

  searchText: string = '';
  @ViewChild(ProductListComponent) productListComponent!: ProductListComponent;
  constructor() { }

  ngOnInit() { }

  setSearchText(val: any) {
    this.searchText = val;
  }
}
