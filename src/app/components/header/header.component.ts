import { Component, OnInit } from '@angular/core';
import { TopMenuComponent } from "./top-menu/top-menu.component";
import { MainMenuComponent } from "./main-menu/main-menu.component";
import { IonContent, IonMenu, IonToolbar, IonHeader, IonButtons, IonMenuButton, IonTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonButtons, IonHeader, TopMenuComponent, MainMenuComponent, IonMenu, IonToolbar, IonContent, IonButtons, IonHeader, IonMenuButton, IonTitle]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
