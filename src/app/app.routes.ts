import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {KhinkaliFlexComponent} from './pages/khinkali-flex/khinkali-flex.component';
import {MtsvadiGridComponent} from './pages/mtsvadi-grid/mtsvadi-grid.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'khinkali-flex',
    component: KhinkaliFlexComponent,
  },
  {
    path: 'mtsvadi-grid',
    component: MtsvadiGridComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  }
];
