import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts.component';

export const route: Routes = [
  { path: '', component: ContactsComponent }
]
export const CONTACTS_ROUTES: ModuleWithProviders = RouterModule.forChild(route);
