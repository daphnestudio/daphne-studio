import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { BaseComponent } from "src/app/util/base-view";
import { EventManagerService } from "src/app/service/base/event-manager.service";
import { Router } from "@angular/router";
declare var $;

@Component({
  selector: "daphne-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent extends BaseComponent<any> implements OnInit {
  currentUrl: string = "";
  isService: boolean = false;
  isWorkWithUs: boolean = false;
  isContacts: boolean = false;
  isFeedbacks: boolean = false;

  constructor(router: Router, eventManager: EventManagerService) {
    super(eventManager);
    // TODO: che schifo, da cambiare assolutamente !!!
    router.events.subscribe((res) => {
      this.currentUrl = router.url;
      if (this.currentUrl.includes("/servizi")) {
        this.isService = true;
        this.isWorkWithUs = false;
        this.isContacts = false;
        this.isFeedbacks = false;
      } else if (this.currentUrl === "/dicono-di-noi") {
        this.isFeedbacks = true;
        this.isService = false;
        this.isWorkWithUs = false;
        this.isContacts = false;
      } else if (this.currentUrl === "/lavora-con-noi") {
        this.isFeedbacks = false;
        this.isService = false;
        this.isWorkWithUs = true;
        this.isContacts = false;
      } else if (this.currentUrl === "/contatti") {
        this.isFeedbacks = false;
        this.isService = false;
        this.isWorkWithUs = false;
        this.isContacts = true;
      }
    });
  }

  ngOnInit() {
    $(function () {
      var navMain = $(".navbar-collapse");
      navMain.on("click", "a", null, function () {
        navMain.collapse("hide");
      });
    });
  }
}
