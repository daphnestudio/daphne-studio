import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HOME_ROUTES } from './home-routing.module';
import { BackendService } from 'src/app/service/backend-caller.service';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HOME_ROUTES,
  ],
  providers: [
    BackendService,
  ]
})
export class HomeModule { }
