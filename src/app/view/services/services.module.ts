import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesComponent } from './services.component';
import { LoaderModule } from 'src/app/control/loader/loader.module';
import { SERVICES_ROUTES } from './services-route';
import { BackendService } from 'src/app/service/backend-caller.service';

@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
    LoaderModule,
    SERVICES_ROUTES,
  ],
  providers: [
    BackendService,
  ]
})
export class ServicesModule { }
