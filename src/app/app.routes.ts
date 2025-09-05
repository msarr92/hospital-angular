import { Routes } from '@angular/router';
import { App } from './app';
import { Login } from './login/login';
import { Home } from './home/home';


export const routes: Routes = [
    { path: '', component: Home },
    { path: 'login', component: Login },
    { path: 'home', component: Home },
    // Redirection pour les routes inconnues
  { 
    path: '**', 
    redirectTo: '',
    pathMatch: 'full'
  }
];


