import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader.component';
import { LottieAnimationViewModule } from 'ng-lottie';

@NgModule({
  declarations: [LoaderComponent],
  imports: [
    CommonModule,
    LottieAnimationViewModule.forRoot()
  ],
  exports: [LoaderComponent],
  entryComponents: [LoaderComponent],
  bootstrap: [LoaderComponent]
})
export class LoaderModule { }
