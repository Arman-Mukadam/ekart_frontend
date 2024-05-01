import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from "./components/header/header.component";
import { TopHeaderComponent } from "./components/top-header/top-header.component";

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    standalone: true,
    imports: [IonContent, IonApp, IonRouterOutlet, HeaderComponent, TopHeaderComponent]
})
export class AppComponent {
  constructor() {}
}
