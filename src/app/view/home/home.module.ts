import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HOME_ROUTES } from './home-routing.module';
import { BackendService } from 'src/app/service/backend-caller.service';
import { MainCardComponent } from 'src/app/control/main-card/main-card.component';

@NgModule({
  declarations: [
    HomeComponent,
    MainCardComponent
  ],
  imports: [
    CommonModule,
    HOME_ROUTES,
  ],
  providers: [
    BackendService,
  ]
})
export class HomeModule { }
