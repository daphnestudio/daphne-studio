import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseComponent } from 'src/app/util/base-view';
import { EventManagerService } from 'src/app/service/base/event-manager.service';
declare var $;

@Component({
  selector: 'daphne-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent extends BaseComponent<any> implements OnInit {

  constructor(eventManager: EventManagerService) {
    super(eventManager);
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
