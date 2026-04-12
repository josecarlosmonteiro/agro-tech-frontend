import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { NotFounded } from './pages/not-founded/not-founded';
import { Areas } from './pages/areas/areas';
import { Sensors } from './pages/sensors/sensors';

export const routes: Routes = [
  { path: 'dashboard', component: Dashboard },
  { path: 'areas', component: Areas },
  { path: 'sensores', component: Sensors },
  { path: '**', component: NotFounded },
];
