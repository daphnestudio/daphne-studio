import { Component } from '@angular/core';
import { BaseComponent } from './util/base-view';
import { EventManagerService } from './service/base/event-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent<any>{
  title = 'Daphne-Studio';

  constructor(eventManager: EventManagerService) {
    super(eventManager)
  }

}

