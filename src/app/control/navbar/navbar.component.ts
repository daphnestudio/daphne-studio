import {
  Component,
  OnInit,
  ViewEncapsulation,
  HostListener,
} from "@angular/core";
import { BaseComponent } from "src/app/util/base-view";
import { EventManagerService } from "src/app/service/base/event-manager.service";
import { Router } from "@angular/router";
import { DOCUMENT } from "@angular/platform-browser";
declare var $;
declare var window: any;

@Component({
  selector: "daphne-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent extends BaseComponent<any> implements OnInit {
  currentUrl: Object = {};
  isScrolled: number = 0;
  constructor(router: Router, eventManager: EventManagerService) {
    super(eventManager);
    router.events.subscribe((res) => {
      this.currentUrl = this.getCurrentUrl(router.url);
      ;
    });
  }

  ngOnInit() {
    $(document).ready(function () {
      $(".open-menu").on("click", function () {
        $(".overlay").addClass("open");
      });
      $(".close-menu").on("click", function () {
        $(".overlay").removeClass("open");
      });
      $("a").on("click", function () {
        $(".overlay").removeClass("open");
      });
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    let navbar = document.querySelector('.main-navbar-container');
    if (!this.isOnMobile) {
      if (window.pageYOffset > navbar.clientHeight) {
        navbar.classList.add('scrolled-navbar');
      } else {
        navbar.classList.remove('scrolled-navbar');
      }
    }
  }
}
