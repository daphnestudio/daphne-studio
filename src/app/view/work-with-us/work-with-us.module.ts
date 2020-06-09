import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkWithUsComponent } from './work-with-us.component';
import { WORK_WITH_US_ROUTES } from './work-with-us-routing.module';
import { BackendService } from 'src/app/service/backend-caller.service';

@NgModule({
  declarations: [WorkWithUsComponent],
  imports: [
    CommonModule,
    WORK_WITH_US_ROUTES,
  ],
  providers: [BackendService]
})
export class WorkWithUsModule { }
