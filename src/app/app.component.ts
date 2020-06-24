import { Component, OnInit } from '@angular/core';
import { BaseComponent } from './util/base-view';
import { EventManagerService } from './service/base/event-manager.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent<any> implements OnInit {
  title = 'Daphne-Studio';

  constructor(eventManager: EventManagerService) {
    super(eventManager)
    console.log(AOS)
  }
  ngOnInit() {
    AOS.init({
      once: true,
      duration: 800, // values from 0 to 3000, with step 50ms    });
    })
  }
}
