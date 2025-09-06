import { Routes } from '@angular/router';
import { App } from './app';
import { Login } from './login/login';
import { Home } from './home/home';
import { Register } from './register/register';


export const routes: Routes = [
    { path: '', component: Home },
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    { path: 'home', component: Home },
    // Redirection pour les routes inconnues
  { 
    path: '**', 
    redirectTo: '',
    pathMatch: 'full'
  }
];


