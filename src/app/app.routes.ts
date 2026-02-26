import { Routes } from '@angular/router';
import { ChatHomeComponent } from './chat/components/chat-home/chat-home.component';
import { authGuard } from './core/guards/auth.guard';
import { homeGuard } from './core/guards/home.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes'),
    canActivate: [authGuard]
  },
  {
    path: 'home',
    component: ChatHomeComponent,
    canActivate: [homeGuard]
  },
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
