import { Routes } from '@angular/router';
import { NotFounded } from './pages/not-founded/not-founded';
import { Areas } from './pages/areas/areas';
import { Sensors } from './pages/sensors/sensors';
import { Alerts } from './pages/alerts/alerts';
import { Login } from './pages/login/login';
import { Registration } from './pages/registration/registration';
import { authGuard } from './guards/auth-guard';
import { ProtectedRoutesContainer } from './pages/protected-routes-container/protected-routes-container';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'cadastro', component: Registration },
  {
    path: '',
    component: ProtectedRoutesContainer,
    canActivate: [authGuard],
    children: [
      { path: 'areas', component: Areas },
      { path: 'sensores', component: Sensors },
      { path: 'alertas', component: Alerts },
      { path: '', redirectTo: 'areas', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: NotFounded },
];
