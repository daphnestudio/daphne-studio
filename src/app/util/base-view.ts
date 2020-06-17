import { EventManagerService } from '../service/base/event-manager.service';
import { EventParams } from './event-manager-media';
import { Subject } from 'rxjs';
import { HostListener, Input, OnDestroy, OnInit, TemplateRef } from '@angular/core';

export const EVENT_NAME_LOADER_SHOW = 'loader_show';
export const EVENT_NAME_LOADER_HIDE = 'loader_hide';
export const EVENT_NAME_OPEN_MODAL = 'open_modal';
export const EVENT_NAME_CLOSE_MODAL = 'close_modal';
export const EVENT_NAME_IMAGE_CHANGE = 'change_profile';
export const CALL_OPEN_SIGN_MODAL = 'open_login_modal';
// toast
export const TOAST_SUCCESS = 'toast_success';
export const TOAST_ERROR = 'toast_error';
export const TOAST_WARNING = 'toast_warning';
export const TOAST_CUSTOM_WARNING = 'toast_custom_warning';
// load filter
export const LOAD_FILTER = 'load_filter';
export const CLEAN_FILTER = 'clean_filter';
export const MORE_FILTER = 'more_filter';
// publish offer
export const PUBLISH_OFFER = 'publish_offer';

// publish offer
export const NEXT_REGISTER = 'next_register';

// draft_company
export const DRAFT_COMPANY = 'draft_company';
// export CSV
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
// draft_company
export const ANIMATION_SUCCESS = 'animation_success';
export const HIDE_ANIMATION_SUCCESS = 'hide_animation_success';

export class BaseComponent<T> implements OnDestroy, OnInit {

  destroy$: Subject<boolean> = new Subject<boolean>();
  public isOnMobile = false;
  public isMediumScreen = false;
  public isLandscape = false;
  public isLargeScreen = false;

  public today: Date = new Date();

  @Input()
  public ViewModel: T;

  constructor(public eventManager: EventManagerService) {
    this.MediaQueryChanges();
    this.CheckMobileScreen(this);
    this.CheckLandscape(this);
    this.CheckLargeScreen(this);
    this.CheckMediumScreen();
  }

  ngOnInit() {

  }

  public getListYears() {
    const currentYear = new Date().getFullYear();
    const years: Array<any> = new Array<any>();
    for (let i = 0; i < 300; i++) {
      years.push({ id: currentYear - i, name: (currentYear - i) });
    }
    return years;
  }

  public successToast(msg: string): void {
    const eventLoaderHide = new EventParams();
    eventLoaderHide.name = TOAST_SUCCESS;
    eventLoaderHide.params = msg;
    this.eventManager.broadcast(eventLoaderHide);
  }

  public errorToast(msg: string): void {
    const eventLoaderHide = new EventParams();
    eventLoaderHide.name = TOAST_ERROR;
    eventLoaderHide.params = msg;
    this.eventManager.broadcast(eventLoaderHide);
  }

  public warningToast(msg: string): void {
    const eventLoaderHide = new EventParams();
    eventLoaderHide.name = TOAST_WARNING;
    eventLoaderHide.params = msg;
    this.eventManager.broadcast(eventLoaderHide);
  }

  public ShowLoader(): void {
    const eventLoaderShow = new EventParams();
    eventLoaderShow.name = EVENT_NAME_LOADER_SHOW;
    this.eventManager.broadcast(eventLoaderShow);
  }

  public loadFilter(): void {
    const event = new EventParams();
    event.name = LOAD_FILTER;
    this.eventManager.broadcast(event);
  }

  public HideLoader(): void {
    const eventLoaderHide = new EventParams();
    eventLoaderHide.name = EVENT_NAME_LOADER_HIDE;
    this.eventManager.broadcast(eventLoaderHide);
  }

  public ShowSuccesAnimation(): void {
    const eventHideSuccess = new EventParams();
    eventHideSuccess.name = ANIMATION_SUCCESS;
    this.eventManager.broadcast(eventHideSuccess);
  }

  public HideSuccesAnimation(): void {
    const eventSuccess = new EventParams();
    eventSuccess.name = HIDE_ANIMATION_SUCCESS;
    this.eventManager.broadcast(eventSuccess);
  }

  goAnimation() {
    const _self = this;
    this.ShowSuccesAnimation();
    setTimeout(function () {
      _self.HideSuccesAnimation();
      _self.CloseModal();
    }, 2000);
  }

  public error() {
    this.HideLoader();
    this.errorToast('Sorry, there has been an issue with the system');
  }

  public CallOpenSignModal(): void {
    const eventLoaderHide = new EventParams();
    eventLoaderHide.name = CALL_OPEN_SIGN_MODAL;
    this.eventManager.broadcast(eventLoaderHide);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const _self = this;
    this.MediaQueryChanges();
    this.CheckMobileScreen(_self);
    this.CheckLandscape(_self);
    this.CheckMediumScreen();
    this.CheckLargeScreen(_self);
  }

  private CheckMobileScreen(self: any) {
    if (window.innerWidth < 992) {
      self.isOnMobile = true;
    } else {
      self.isOnMobile = false;
    }
  }

  private CheckLargeScreen(self: any) {
    if (window.innerWidth > 992 && window.innerWidth < 1200) {
      self.isLargeScreen = true;
    } else {
      self.isLargeScreen = false;
    }
  }

  private CheckLandscape(self: any) {
    if (window.orientation == 90 || window.orientation == -90) { self.isLandscape = true; }
    else { self.isLandscape = false; }
  }

  private MediaQueryChanges() {
    const mql: MediaQueryList = window.matchMedia('(min-width: 992px)');
    const mqlLandscape: MediaQueryList = window.matchMedia('(orientation: portrait)');
    const mqlLargeScreen: MediaQueryList = window.matchMedia('(min-width: 960px) and (max-width: 1279px)');

    mql.addListener((mql) => {
      this.isOnMobile = mql.matches ? false : true;
    });
    mqlLandscape.addListener((mqlLandscape) => {
      this.isLandscape = mqlLandscape.matches ? false : true;
    });
    mqlLargeScreen.addListener((mqlLargeScreen) => {
      this.isLargeScreen = mqlLargeScreen.matches ? false : true;
    });
  }

  private CheckMediumScreen() {
    if (window.innerWidth < 1500) {
      this.isMediumScreen = true;
    } else {
      this.isMediumScreen = false;
    }
  }

  public OpenModal(template: TemplateRef<any>): void {
    const eventLoaderHide = new EventParams();
    eventLoaderHide.name = EVENT_NAME_OPEN_MODAL;
    eventLoaderHide.params = template;
    this.eventManager.broadcast(eventLoaderHide);
  }

  public ChangeImage(img): void {
    const eventImage = new EventParams();
    eventImage.name = EVENT_NAME_IMAGE_CHANGE;
    eventImage.params = img;
    this.eventManager.broadcast(eventImage);
  }

  public CloseModal(): void {
    const eventLoaderHide = new EventParams();
    eventLoaderHide.name = EVENT_NAME_CLOSE_MODAL;
    this.eventManager.broadcast(eventLoaderHide);
  }

  public PublishOffer(): void {
    const eventPublish = new EventParams();
    eventPublish.name = PUBLISH_OFFER;
    this.eventManager.broadcast(eventPublish);
  }

  public NextRegister(): void {
    const eventNext = new EventParams();
    eventNext.name = NEXT_REGISTER;
    this.eventManager.broadcast(eventNext);
  }

  public cleanFilter(): void {
    const event = new EventParams();
    event.name = CLEAN_FILTER;
    this.eventManager.broadcast(event);
  }

  public moreFilter(show): void {
    const event = new EventParams();
    event.name = MORE_FILTER;
    event.params = show;
    this.eventManager.broadcast(event);
  }

  public DraftCompany(draft): void {
    const eventDraft = new EventParams();
    eventDraft.name = DRAFT_COMPANY;
    eventDraft.params = draft;
    this.eventManager.broadcast(eventDraft);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  clearStorageForNewOffer() {
    localStorage.removeItem('offerModel');
    localStorage.removeItem('survey');
    localStorage.removeItem('addedBoost');
    localStorage.removeItem('missingCredit');
    localStorage.removeItem('registrationDate');
  }

  convertDateForGraphqlString(date: Date): string {
    let month = '' + (date.getMonth() + 1),
      day = '' + date.getDate(),
      year = date.getFullYear();
    if (month.length < 2) { month = '0' + month; }
    if (day.length < 2) { day = '0' + day; }
    return [year, month, day].join('-') + 'T00:00:00.000Z';
  }

  generateGuid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

  sendEventGoogle(category: any, action: any) {
    (window as any).ga('send', 'event', {
      eventCategory: category,
      eventAction: action
    });
  }

  getCurrentUrl(url: string) {
    let isService: boolean = false;
    let isWorkWithUs: boolean = false;
    let isContacts: boolean = false;
    let isFeedbacks: boolean = false;
    let isBody: boolean = false;
    let isFace: boolean = false;
    let isLaser: boolean = false;
    if (url === "/servizi") {
      isService = true;
      isWorkWithUs = false;
      isContacts = false;
      isFeedbacks = false;
      isBody = false;
      isFace = false;
      isLaser = false;
    } else if (url === "/dicono-di-noi") {
      isFeedbacks = true;
      isService = false;
      isWorkWithUs = false;
      isContacts = false;
      isBody = false;
      isFace = false;
      isLaser = false;
    } else if (url === "/lavora-con-noi") {
      isWorkWithUs = true;
      isFeedbacks = false;
      isService = false;
      isContacts = false;
    } else if (url === "/contatti") {
      isContacts = true;
      isFeedbacks = false;
      isService = false;
      isWorkWithUs = false;
      isBody = false;
      isFace = false;
      isLaser = false;
    } else if (url === "/servizi/corpo") {
      isBody = true;
      isService = true;
      isWorkWithUs = false;
      isContacts = false;
      isFeedbacks = false;
      isFace = false;
      isLaser = false;
    } else if (url === "/servizi/viso") {
      isFace = true;
      isService = true;
      isWorkWithUs = false;
      isContacts = false;
      isFeedbacks = false;
      isLaser = false;
      isBody = false;
    } else if (url === "/servizi/laser") {
      isLaser = true;
      isService = true;
      isFace = false;
      isWorkWithUs = false;
      isContacts = false;
      isFeedbacks = false;
      isBody = false;
    }
    return {
      isLaser,
      isService,
      isFace,
      isWorkWithUs,
      isContacts,
      isFeedbacks,
      isBody,
    }
  }

}


