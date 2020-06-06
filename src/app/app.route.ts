import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

export const APP_ROUTES: ModuleWithProviders = RouterModule.forRoot(routes, {
  useHash: false,
  enableTracing: false,
  onSameUrlNavigation: 'reload'
});
