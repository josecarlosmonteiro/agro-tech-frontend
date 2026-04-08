import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { NotFounded } from './pages/not-founded/not-founded';
import { Areas } from './pages/areas/areas';

export const routes: Routes = [
  { path: 'dashboard', component: Dashboard },
  { path: 'areas', component: Areas },
  { path: '**', component: NotFounded },
];
