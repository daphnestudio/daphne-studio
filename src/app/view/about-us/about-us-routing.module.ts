import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us.component';

export const route: Routes = [
  { path: '', component: AboutUsComponent }
]
export const ABOUT_US_ROUTES: ModuleWithProviders = RouterModule.forChild(route);
