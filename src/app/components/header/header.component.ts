import { Component, OnInit } from '@angular/core';
import { TopMenuComponent } from "./top-menu/top-menu.component";
import { MainMenuComponent } from "./main-menu/main-menu.component";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports: [TopMenuComponent, MainMenuComponent]
})  
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
