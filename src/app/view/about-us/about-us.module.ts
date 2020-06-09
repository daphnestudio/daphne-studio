import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { ABOUT_US_ROUTES } from './about-us-routing.module';
import { BackendService } from 'src/app/service/backend-caller.service';

@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    CommonModule,
    ABOUT_US_ROUTES,
  ],
  providers: [BackendService]
})
export class AboutUsModule { }
