import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseComponent } from 'src/app/util/base-view';
import { EventManagerService } from 'src/app/service/base/event-manager.service';


@Component({
  selector: 'daphne-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent extends BaseComponent<any> implements OnInit {

  constructor(eventManager: EventManagerService) {
    super(eventManager)
  }

  ngOnInit() {
  }

}
