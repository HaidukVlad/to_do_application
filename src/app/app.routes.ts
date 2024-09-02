import { Routes } from '@angular/router';
import { LoginComponent } from './login-and-registration/login/login.component';
import { RegistrationComponent } from './login-and-registration/registration/registration.component';
import { IntroPagesComponent } from './intro-pages/intro-pages.component';

export const routes: Routes = [
    { path: '', component: IntroPagesComponent }, // стартовая страница
    { path: 'intro', component: IntroPagesComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegistrationComponent },
    { path: '**', redirectTo: '/login' }
];

