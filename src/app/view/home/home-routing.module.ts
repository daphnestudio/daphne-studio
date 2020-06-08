import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

export const route: Routes = [
  { path: '', component: HomeComponent }
]
export const HOME_ROUTES: ModuleWithProviders = RouterModule.forChild(route);
