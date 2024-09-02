import { Routes } from '@angular/router';
import { LoginComponent } from './login-and-registration/login/login.component';
import { RegistrationComponent } from './login-and-registration/registration/registration.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegistrationComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // перенаправление по умолчанию
    { path: '**', redirectTo: '/login' } // перенаправление на страницу входа для несуществующих маршрутов
];
