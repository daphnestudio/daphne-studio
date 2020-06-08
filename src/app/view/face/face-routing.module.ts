import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaceComponent } from './face.component';

export const route: Routes = [
  { path: '', component: FaceComponent }
]
export const FACE_ROUTES: ModuleWithProviders = RouterModule.forChild(route);
