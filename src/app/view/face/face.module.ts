import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceComponent } from './face.component';
import { FACE_ROUTES } from './face-routing.module';
import { BackendService } from 'src/app/service/backend-caller.service';

@NgModule({
  declarations: [FaceComponent],
  imports: [
    CommonModule,
    FACE_ROUTES,
  ],
  providers: [
    BackendService,
  ]
})
export class FaceModule { }
