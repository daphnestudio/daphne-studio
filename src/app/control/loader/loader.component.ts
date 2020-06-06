import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'daphne-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoaderComponent implements OnInit {

  public lottieConfig: Object;

  constructor() {
    this.lottieConfig = {
      path: 'https://assets9.lottiefiles.com/packages/lf20_UBA69g.json',
      autoplay: true,
      loop: true
    }
  }

  ngOnInit() {
  }

}
