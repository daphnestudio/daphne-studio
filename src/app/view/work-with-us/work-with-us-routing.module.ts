import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkWithUsComponent } from './work-with-us.component';

export const route: Routes = [
  { path: '', component: WorkWithUsComponent }
]
export const WORK_WITH_US_ROUTES: ModuleWithProviders = RouterModule.forChild(route);
