import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonRow, IonCol, IonGrid, IonHeader, IonMenu, IonToolbar, IonContent, IonTitle, IonMenuButton, IonButtons } from "@ionic/angular/standalone";

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  standalone: true,
  imports: [IonHeader, IonGrid, IonCol, IonRow, RouterLink, IonMenu, IonHeader, IonToolbar, IonContent, IonTitle, IonMenuButton, IonButtons]
})
export class MainMenuComponent implements OnInit {
  mainMenuItems: any[] = [
    {
      title: "Home",
      path: "/home"
    },
    {
      title: "Products",
      path: "/products"
    },
    {
      title: "Sale",
      path: "/sale"
    },
    {
      title: "New Arrivals",
      path: "/new-arrival"
    },
    {
      title: "Contact",
      path: "/contact"
    },
  ];
  topMenus: any[] = [
    // ["Help", "Exchange & Returns", "Order Tracker", "SignUp / Login"]
    {
      title: "Help",
      path: "/help"
    },
    {
      title: "Exchange & Returns",
      path: "/exchange-and-returns"
    },
    {
      title: "Order Tracker",
      path: "/order-tracker"
    },
    {
      title: "SignUp / Login",
      path: "/signup-login"
    }
  ]
  constructor() { }

  ngOnInit() { }

}
