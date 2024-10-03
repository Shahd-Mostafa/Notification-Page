import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Frontend Mentor | Notifications page',
  },
];
