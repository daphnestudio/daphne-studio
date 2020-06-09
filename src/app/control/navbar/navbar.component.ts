import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare var $;

@Component({
  selector: 'daphne-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    $(function () {
      var navMain = $(".navbar-collapse");
      navMain.on("click", "a", null, function () {
        navMain.collapse('hide');
      });
    });
  }

}
