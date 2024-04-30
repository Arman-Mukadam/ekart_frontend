import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { TopHeaderComponent } from "../components/top-header/top-header.component";
import { HeaderComponent } from "../components/header/header.component";
import { ContainerComponent } from "../components/container/container.component";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    standalone: true,
    imports: [IonHeader, IonToolbar, IonTitle, IonContent, TopHeaderComponent, HeaderComponent, ContainerComponent]
})
export class HomePage {
  constructor() { }
}
