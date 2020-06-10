import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.route';
import { NavbarModule } from './control/navbar/navbar.module';
import { LoaderModule } from './control/loader/loader.module';
import { EventManagerService } from './service/base/event-manager.service';
import { FooterModule } from './control/footer/footer.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    NavbarModule,
    FooterModule,
    BrowserAnimationsModule,
    // LoaderModule,
  ],
  providers: [EventManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
