import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { BaseComponent } from 'src/app/util/base-view';
import { EventManagerService } from 'src/app/service/base/event-manager.service';

@Component({
  selector: 'daphne-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainCardComponent extends BaseComponent<any> implements OnInit {
  @Input() styles: Object;
  @Input() isMintCard: boolean;
  @Input() goTo: string;

  constructor(eventManager: EventManagerService) {
    super(eventManager)
  }

  ngOnInit() {
    console.log(this.isMintCard)
    console.log(this.styles)
  }

  getBgColor() {
    return this.isMintCard ? this.styles['mintBgColor'] : this.styles['grayBgColor'];
  }

  getNavigationUrl() {
    return this.goTo === 'servizi' ? '/servizi' : '/servizi/corpo'
  }

}
