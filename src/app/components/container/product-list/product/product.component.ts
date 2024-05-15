import { NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonTitle, IonCardTitle, IonCol, IonGrid, IonRow } from '@ionic/angular/standalone';
import { Product } from 'src/models/Product';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  standalone: true,
  imports: [IonicModule,NgStyle]
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  constructor() { }

  ngOnInit() { }

}
