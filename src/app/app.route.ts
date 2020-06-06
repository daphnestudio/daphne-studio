import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: 'src/app/view/home/home.module#HomeModule',
  },
  {
    path: 'services',
    loadChildren: 'src/app/view/services/services.module#ServicesModule',
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

export const APP_ROUTES: ModuleWithProviders = RouterModule.forRoot(routes, {
  useHash: false,
  enableTracing: false,
  onSameUrlNavigation: 'reload'
});
