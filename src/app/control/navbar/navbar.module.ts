import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [NavbarComponent],
  entryComponents: [NavbarComponent],
  bootstrap: [NavbarComponent]
})
export class NavbarModule { }