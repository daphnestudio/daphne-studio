import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body.component';

export const route: Routes = [
  { path: '', component: BodyComponent }
]
export const BODY_ROUTES: ModuleWithProviders = RouterModule.forChild(route);
