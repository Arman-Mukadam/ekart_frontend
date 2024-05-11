import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/models/Product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  standalone: true,
})
export class ProductDetailComponent implements OnInit {
  @Input() productListComp!: ProductListComponent;
  product!: Product;
  constructor() { }

  ngOnInit() {
    this.product = this.productListComp.selectedProduct;
  }

}
