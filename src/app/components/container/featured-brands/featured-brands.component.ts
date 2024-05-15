import { Component, OnInit } from '@angular/core';
import { IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'featured-brands',
  templateUrl: './featured-brands.component.html',
  styleUrls: ['./featured-brands.component.scss'],
  standalone: true,
  imports: [
    IonButton
  ]
})
export class FeaturedBrandsComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
