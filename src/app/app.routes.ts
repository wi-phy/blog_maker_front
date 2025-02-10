import { Routes } from '@angular/router';
import { HomePage } from './core/pages/home/home.page';
import { LoginPage } from './core/pages/login/login.page';
import { SignupPage } from './core/pages/signup/signup.page';

export const routes: Routes = [
  { path: 'home', component: HomePage },
  { path: 'login', component: LoginPage },
  { path: 'signup', component: SignupPage },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
