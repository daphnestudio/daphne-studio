import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {APP_ROUTES} from './app.route';
import { NavbarModule } from './control/navbar/navbar.module';
import { LoaderModule } from './control/loader/loader.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    NavbarModule,
    // LoaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
