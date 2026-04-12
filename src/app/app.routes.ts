import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { NotFounded } from './pages/not-founded/not-founded';
import { Areas } from './pages/areas/areas';
import { Sensors } from './pages/sensors/sensors';
import { Alerts } from './pages/alerts/alerts';

export const routes: Routes = [
  { path: 'dashboard', component: Dashboard },
  { path: 'areas', component: Areas },
  { path: 'sensores', component: Sensors },
  { path: 'alertas', component: Alerts },
  { path: '**', component: NotFounded },
];
