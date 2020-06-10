import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body.component';
import { BODY_ROUTES } from './body-routing.module';
import { BackendService } from 'src/app/service/backend-caller.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BodyComponent],
  imports: [
    CommonModule,
    BODY_ROUTES,
    ReactiveFormsModule
  ],
  providers: [BackendService]
})
export class BodyModule { }
