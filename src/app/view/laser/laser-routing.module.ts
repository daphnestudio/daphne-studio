import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaserComponent } from './laser.component';

export const route: Routes = [
  { path: '', component: LaserComponent}
]
export const LASER_ROUTES: ModuleWithProviders = RouterModule.forChild(route);
