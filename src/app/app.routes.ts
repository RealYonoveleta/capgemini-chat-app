import { Routes } from '@angular/router';
import { ChatHomeComponent } from './chat/components/chat-home/chat-home.component';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes'),
  },
  {
    path: 'home',
    component: ChatHomeComponent
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
