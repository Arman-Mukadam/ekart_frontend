import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  standalone: true,
  imports:[RouterLink]
})
export class MainMenuComponent implements OnInit {
  mainMenuItems: string[] = ["Home", "Products", "Sale", "New Arrival", "Contact"];

  constructor() { }

  ngOnInit() { }

}
