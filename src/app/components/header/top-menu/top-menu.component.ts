import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss'],
  standalone: true,
  imports: [RouterLink]
})
export class TopMenuComponent implements OnInit {

  

  constructor() { }

  ngOnInit() { }

}
