import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    path: 'servizi',
    loadChildren: 'src/app/view/services/services.module#ServicesModule',
  },
  {
    path: 'servizi/viso',
    loadChildren: 'src/app/view/face/face.module#FaceModule',
  },
  {
    path: 'servizi/corpo',
    loadChildren: 'src/app/view/body/body.module#BodyModule',
  },
  {
    path: 'servizi/laser',
    loadChildren: 'src/app/view/laser/laser.module#LaserModule',
  },
  {
    path: 'dicono-di-noi',
    loadChildren: 'src/app/view/about-us/about-us.module#AboutUsModule',
  },
  {
    path: 'lavora-con-noi',
    loadChildren: 'src/app/view/work-with-us/work-with-us.module#WorkWithUsModule',
  },
  {
    path: 'contatti',
    loadChildren: 'src/app/view/contacts/contacts.module#ContactsModule',
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

export const APP_ROUTES: ModuleWithProviders = RouterModule.forRoot(routes, {
  useHash: false,
  enableTracing: false,
  onSameUrlNavigation: 'reload',
  scrollPositionRestoration: 'enabled'
});
