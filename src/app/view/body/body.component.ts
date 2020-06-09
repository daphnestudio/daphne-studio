import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseComponent } from 'src/app/util/base-view';
import { EventManagerService } from 'src/app/service/base/event-manager.service';

@Component({
  selector: 'daphne-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BodyComponent extends BaseComponent<any> implements OnInit {

  mainBodyImage: string ='https://it.jobrapido.com/blog/wp-content/uploads/sites/2/2018/06/Beauty-Consultant-di-cosa-si-occupa.jpg';

  constructor(eventManager: EventManagerService) {
    super(eventManager);
  }
  ngOnInit() {
    console.log(this.isOnMobile)
  }

}
