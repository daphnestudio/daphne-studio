import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.route';
import { NavbarModule } from './control/navbar/navbar.module';
import { LoaderModule } from './control/loader/loader.module';
import { EventManagerService } from './service/base/event-manager.service';
import { FooterModule } from './control/footer/footer.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

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
    ToastrModule.forRoot(
      {
        preventDuplicates: true,
        newestOnTop: true,
        enableHtml: true,
        timeOut: 3000,
        tapToDismiss: false,
        positionClass: 'toast-top-right',
        toastClass: 'daphne-toast',
        iconClasses: {
          error: 'daphne-error',
          success: 'daphne-success',
          warning: 'daphne-warning'
        }
      }
    ),
  ],
  providers: [EventManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
