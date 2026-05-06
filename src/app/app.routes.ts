import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home').then((m) => m.Home),
  },
  {
    path: 'menu',
    loadComponent: () => import('./menu/menu').then((m) => m.Menu),
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact').then((m) => m.Contact),
  },
  {
    path: 'reservation',
    loadComponent: () => import('./reservation/reservation').then((m) => m.Reservation),
  },
];
