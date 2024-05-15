import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/models/Product';
import { ProductListComponent } from '../product-list/product-list.component';
import { IonButton, IonImg } from "@ionic/angular/standalone";

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  standalone: true,
  imports: [IonImg, IonButton]
})
export class ProductDetailComponent implements OnInit {
  @Input() productListComp!: ProductListComponent;
  product!: Product;
  constructor() { }

  // ngOnInit runs when all the properties(variables) have been initialized in the component
  ngOnInit() {
    this.product = this.productListComp.selectedProduct;
  }

}
