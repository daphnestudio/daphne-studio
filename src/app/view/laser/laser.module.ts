import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaserComponent } from './laser.component';
import { LASER_ROUTES } from './laser-routing.module';
import { BackendService } from 'src/app/service/backend-caller.service';

@NgModule({
  declarations: [LaserComponent],
  imports: [
    CommonModule,
    LASER_ROUTES,
  ],
  providers: [BackendService]
})
export class LaserModule { }
