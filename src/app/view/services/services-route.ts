import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services.component';

export const route: Routes = [
  { path: '', component: ServicesComponent }
]
export const SERVICES_ROUTES: ModuleWithProviders = RouterModule.forChild(route);
