import { Routes } from '@angular/router';
import { Home } from "./home/home";

export const routes: Routes = [

    {
            path: '',
            component: Home,
            children: [
                {
                    path: '', 
                    loadComponent: () => import('./home/home')
                    .then(m => m.Home)
                },
                {
                    path: 'about',
                    loadComponent: () => import('./menu/menu')
                    .then(m => m.Menu)
                }
            ]
        }
];
