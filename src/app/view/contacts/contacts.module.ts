import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { CONTACTS_ROUTES } from './contacts-routing.module';
import { BackendService } from 'src/app/service/backend-caller.service';

@NgModule({
  declarations: [ContactsComponent],
  imports: [
    CommonModule,
    CONTACTS_ROUTES,
  ],
  providers: [BackendService]
})
export class ContactsModule { }
