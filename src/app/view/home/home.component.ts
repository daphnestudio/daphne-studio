import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseComponent } from 'src/app/util/base-view';
@Component({
  selector: 'daphne-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {

  cardStylesObj: Object = {
    mintBgColor: { 'background-color': '#B4FFB2' },
    grayBgColor: { 'background-color': '#F5F7F7' },
  }

  constructor() { }

  ngOnInit() {
  }

}
