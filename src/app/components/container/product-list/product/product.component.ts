import { NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonTitle, IonCardTitle } from '@ionic/angular/standalone';
import { Product } from 'src/models/Product';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  standalone: true,
  imports: [NgStyle, IonCard, IonCardHeader, IonCardContent, IonTitle, IonCardSubtitle, IonCardTitle]
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  constructor() { }

  ngOnInit() { }

}
