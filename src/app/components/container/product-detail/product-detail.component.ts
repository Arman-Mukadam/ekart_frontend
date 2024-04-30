import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/Product';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  standalone: true,
})
export class ProductDetailComponent implements OnInit {
  product!: Product;
  constructor() { }

  ngOnInit() { }

}
